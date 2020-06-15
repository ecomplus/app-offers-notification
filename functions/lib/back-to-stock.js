/* eslint-disable promise/no-nesting */
const awsEmail = require('./aws-emails')

module.exports = ({ appSdk, appData, admin, trigger, storeId }) => {
  const db = admin.firestore()
  const collection = db.collection('offer_notifications')

  const productId = trigger.resource_id

  return collection
    .where('store_id', '==', storeId)
    .where('product_id', '==', productId)
    .where('customer_criterias', '==', 'out_of_stock')
    .where('notified', '==', false)

    .then(async querySnapshot => {
      if (querySnapshot.empty) {
        const err = new Error('No e-mails for this specific product')
        err.code = 'NOEMAILS'
        throw err
      }

      const store = await appSdk
        .apiRequest(storeId, '/stores/me.json').then(({ response }) => response.data)

      const product = await appSdk
        .apiRequest(storeId, `/products/${productId}.json`).then(({ response }) => ({ response, store, appData }))

      const promises = []
      const html = 'Hellow'

      querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data())
        const promise = awsEmail(store, appData.main_email, doc.data().customer_email, 'De volta ao estoque', html)
          .then(() => collection.doc(doc.id).update({ notified: true }))
        promises.push(promise)
      })

      return Promise.all(promises)
    })

    .then(result => {
      console.log(result)
      return
    })

    .catch(err => console.error('BACKTOSTOKE_ERR', err))
}