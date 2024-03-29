const awsEmail = require('./aws-emails')
const tm = require('@ecomplus/transactional-mails')

module.exports = ({ appSdk, appData, admin, trigger, storeId }) => {
  const db = admin.firestore()
  const collection = db.collection('offer_notifications')
  const productId = trigger.resource_id

  return collection
    .where('store_id', '==', storeId)
    .where('product_id', '==', productId)
    .where('customer_criterias', '==', 'out_of_stock')
    .where('notified', '==', false)
    .get()
    .then(async querySnapshot => {
      if (querySnapshot.empty) {
        const err = new Error('No e-mails for this specific product')
        err.code = 'NOEMAILS'
        throw err
      }

      const store = await appSdk
        .apiRequest(storeId, '/stores/me.json').then(({ response }) => response.data)

      const product = await appSdk
        .apiRequest(storeId, `/products/${productId}.json`).then(({ response }) => response.data)

      const promises = []
      querySnapshot.forEach(async doc => {
        const data = doc.data()
        if (data.customer_email !== '') {
          if (data.variation_id) {
            const variation = product.variations
              ? product.variations.find(({ _id }) => _id === data.variation_id)
              : null
            if (!variation || !variation.quantity) {
              return
            }
          }
          const customer = {
            main_email: data.customer_email,
            name: {
              given_name: data.customer_name
            }
          }
          const html = await tm.stock(store, customer, product, 'pt_br').catch(e => console.log(e))
          const promise = awsEmail(store, appData.main_email, data.customer_email, 'Produto em estoque', html)
            .then(() => collection.doc(doc.id).update({ notified: true }))
          promises.push(promise)
        }
      })

      return Promise.all(promises)
    })

    .then(result => {
      console.log(result)
    })

    .catch(err => {
      const { code } = err
      if (code !== 'NOEMAILS') {
        console.error(err)
      }
    })
}
