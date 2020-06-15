/* eslint-disable promise/no-nesting */

module.exports = async ({ appSdk, appData, admin, trigger, storeId }) => {
  const db = admin.firestore()
  const collection = db.collection('offer_notifications')

  const productId = trigger.resource_id
  const product = await appSdk
  .apiRequest(storeId, `/products/${productId}.json`).then(({ response }) => ({ response, store, appData }))

  return collection
    .where('store_id', '==', storeId)
    .where('product_id', '==', productId)
    .where('customer_criterias', '==', 'change_price')
    .where('product_price', '>', product.price)
    .where('notified', '==', false)

    .then(async querySnapshot => {
      if (querySnapshot.empty) {
        const err = new Error('No e-mails for this specific product')
        err.code = 'NOEMAILS'
        throw err
      }

      const store = await appSdk
        .apiRequest(storeId, '/stores/me.json').then(({ response }) => response.data)

      const promises = []
      const html = 'Hellow'

      querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data())
        const promise = awsEmail(store, appData.main_email, doc.data().customer_email, 'Produto Alterou o preço', html)
          .then(() => collection.doc(doc.id).update({ notified: true }))
        promises.push(promise)
      })

      return Promise.all(promises)
    })

    .then(result => {
      console.log(result)
      return
    })

    .catch(err => console.error('CHANGEPRICE_ERR', err))
}