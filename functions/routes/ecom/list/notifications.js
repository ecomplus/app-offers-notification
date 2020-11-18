import { parseAsync } from 'json2csv'

exports.get = async ({ appSdk, admin }, req, res) => {
  const { storeId } = req

  const querySnapshot = await admin.firestore()
    .collection('offer_notifications')
    .where('storeId', '==', storeId)
    .get()

  const notifications = querySnapshot.docs.map(doc => {
    const data = doc.data()
    return {
      ...data,
      created_at: data.toDate().toISOString()
    }
  })

  const csv = await parseAsync(notifications)
  const datetime = new Date().toISOString().replace(/\W/g, '')
  const filename = `notifications_${storeId}_${datetime}.csv`

  res.header('Content-Type', 'text/csv')
  res.attachment(filename)
  return res.send(csv)
}
