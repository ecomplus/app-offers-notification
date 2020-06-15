/* eslint-disable promise/no-nesting */
// read configured E-Com Plus app data
const getAppData = require('./../../lib/store-api/get-app-data')
const productBackToStock = require('../../lib/back-to-stock')
const productChangePrice = require('./../../lib/change-price')

const SKIP_TRIGGER_NAME = 'SkipTrigger'
const ECHO_SUCCESS = 'SUCCESS'
const ECHO_SKIP = 'SKIP'
const ECHO_API_ERROR = 'STORE_API_ERR'

exports.post = ({ appSdk, admin }, req, res) => {
  // receiving notification from Store API
  const { storeId } = req

  /**
   * Treat E-Com Plus trigger body here
   * Ref.: https://developers.e-com.plus/docs/api/#/store/triggers/
   */
  const trigger = req.body

  // get app configured options
  getAppData({ appSdk, storeId })

    .then(async appData => {
      /* DO YOUR CUSTOM STUFF HERE */
      const product = await appSdk
        .apiRequest(storeId, `/products/${trigger.resource_id}.json`).then(({ response }) => response.data)

      // criterio fora de stoque
      if (trigger.fields &&
        trigger.fields.includes('quantity') &&
        product.quantity > 0) {
        // avisa que o produto chegou
        productBackToStock({ appSdk, appData, admin, trigger, storeId })
      }

      // criterio mudança de preço
      if (trigger.fields && trigger.fields.includes('price')) {
        // verifica se o produto teve alteração de preço e avisa os customers
        productChangePrice({ appSdk, appData, admin, trigger, storeId })
      }

      // all done
      return res.send(ECHO_SUCCESS)
    })

    .catch(err => {
      if (err.name === SKIP_TRIGGER_NAME) {
        // trigger ignored by app configuration
        res.send(ECHO_SKIP)
      } else {
        // console.error(err)
        // request to Store API with error response
        // return error status code
        res.status(500)
        const { message } = err
        res.send({
          error: ECHO_API_ERROR,
          message
        })
      }
    })
}
