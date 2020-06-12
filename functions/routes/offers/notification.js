/* eslint-disable promise/no-nesting */
const { randomObjectId } = require('@ecomplus/utils')
const ecomUtils = require('@ecomplus/utils')
const axios = require('axios')

exports.get = ({ appSdk }, req, res) => {
  const storeId  = parseInt(req.query.store_id || req.get('x-store-id'), 10)
  const { productId } = req.query
  const opt = {
    storeId,
    i19Title: 'Produto Teste',
    criterias: req.query.criterias || 'out_of_stock',
    recaptch_key: process.env.RECAPTCHA_KEY
  }

  const _ = {
    ecomUtils
  }

  appSdk.apiRequest(storeId, '/stores/me.json')
    .then(resp => {
      const store = resp.response.data
      return appSdk
        .apiRequest(storeId, `/products/${productId}.json`).then(({ response }) => ({ response, store }))
    })
    .then(async ({ response, store }) => {
      opt.product = response.data
      opt.css = await axios.get(`${store.homepage}/storefront.css`).then(({ data }) => data)
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
  const recaptchToken = req.get('x-google-token')

  if (!recaptchToken) {
    return res.status(400).send({
      status: 400,
      message: 'google token not setted at header'
    })
  }

  if (!body || body['g-recaptcha-response'] !== recaptchToken) {
    return res.status(403).send({
      status: 403,
      message: 'body not found or g-recaptcha-response not setted at body or not match with x-google-token'
    })
  }

  const db = admin.firestore()
  const collection = db.collection('offer_notifications')
  return axios({
    method: 'post',
    url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchToken}`,
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
            console.log()
          }
        }

        return collection
          .doc(ecomUtils.randomObjectId())
          .set(doc).then(r => console.log(r))
      }
      return querySnapshot
    })

    .then(() => {
      // response success
      return res.status(201).end()
    })


    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
}
