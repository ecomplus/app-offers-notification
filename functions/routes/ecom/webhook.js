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
      // criterio fora de stoque
      if (
        trigger.fields &&
        trigger.fields.includes('quantity') &&
        trigger.body &&
        trigger.body.quantity > 0
      ) {
        setTimeout(async () => {
          // avisa que o produto chegou
          await productBackToStock({ appSdk, appData, admin, trigger, storeId })
        }, 1000)
      }
      // criterio mudança de preço
      if (trigger.fields && trigger.fields.includes('price')) {
        setTimeout(async () => {
          // verifica se o produto teve alteração de preço e avisa os customers
          await productChangePrice({ appSdk, appData, admin, trigger, storeId })
        }, 1000)
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
