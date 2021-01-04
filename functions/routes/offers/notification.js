/* eslint-disable promise/no-nesting */
const { randomObjectId } = require('@ecomplus/utils')
const ecomUtils = require('@ecomplus/utils')
const axios = require('axios')
// read configured E-Com Plus app data
const getAppData = require('./../../lib/store-api/get-app-data')

exports.get = ({ appSdk }, req, res) => {
  const storeId = parseInt(req.query.store_id || req.get('x-store-id'), 10)
  const { productId } = req.query
  const opt = {
    storeId,
    criterias: req.query.criterias || 'out_of_stock',
    recaptch_key: process.env.RECAPTCHA_KEY
  }

  const _ = {
    ecomUtils
  }

  getAppData({ appSdk, storeId })

    .then(appData => {
      return appSdk
        .apiRequest(storeId, '/stores/me.json').then(({ response }) => ({ store: response.data, appData }))
    })

    .then(({ store, appData }) => {
      return appSdk
        .apiRequest(storeId, `/products/${productId}.json`).then(({ response }) => ({ response, store, appData }))
    })

    .then(async ({ response, store, appData }) => {
      opt.product = response.data
      let cssUrl
      if (appData.store_stylesheet) {
        cssUrl = appData.store_stylesheet
      } else {
        cssUrl = `${store.homepage}/storefront.css`
      }

      opt.css = await axios.get(cssUrl).then(({ data }) => data)
      opt.store = store
      return res.render('offer-notification', { opt, _ })
    })

    .catch(err => {
      console.log(err)
      return res.render('error', { opt, err })
    })
}

exports.post = ({ appSdk, admin }, req, res) => {
  const storeId = parseInt(req.query.store_id || req.get('x-store-id'), 10)
  const { body } = req
  const token = req.get('X-Google-Token') || body.token

  if (!token) {
    return res.status(400).send({
      status: 400,
      message: 'X-Google-Token not found'
    })
  }

  const fields = ['product_id', 'customer_email', 'customer_name', 'customer_criterias']
  let isValid = true
  let fieldName = ''
  fields.forEach(field => {
    if (!body[field]) {
      fieldName = field
      isValid = false
    }
  })

  if (!isValid) {
    return res.status(400).send({
      status: 400,
      message: 'Missing required prop ' + fieldName
    })
  }

  const db = admin.firestore()
  const collection = db.collection('offer_notifications')
  return axios({
    method: 'post',
    url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

    .then(resp => {
      const { data } = resp
      if (data.success === false) {
        const err = new Error('google verify failed')
        err.code = 'VERIFICATION_FAILED'
        throw err
      }
      return data
    })

    .then(() => {
      return collection
        .where('store_id', '==', storeId)
        .where('product_id', '==', body.product_id)
        .where('customer_email', '==', body.customer_email)
        .where('customer_criterias', '==', body.customer_criterias)
        .get()
    })

    .then(async querySnapshot => {
      if (querySnapshot.empty) {
        const doc = {
          created_at: admin.firestore.Timestamp.fromDate(new Date()),
          store_id: storeId,
          product_id: body.product_id,
          customer_email: body.customer_email,
          customer_name: body.customer_name,
          customer_criterias: body.customer_criterias,
          notified: false,
          product_quantity: 0
        }

        if (body.customer_criterias === 'price_change') {
          try {
            const ecomProduct = await appSdk
              .apiRequest(storeId, `/products/${body.product_id}.json`).then(({ response }) => response.data)
            doc.product_price = ecomProduct.price
          } catch (error) {
            console.error(error)
          }
        }

        return collection
          .doc(ecomUtils.randomObjectId())
          .set(doc)
      }
      return querySnapshot
    })

    .then(() => {
      // response success
      return res.status(201).end()
    })


    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
}
