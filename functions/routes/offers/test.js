
exports.get = ({ appSdk }, req, res) => {
  const { storeId } = req
  const { productId } = req.query
  console.log(req.baseUrl)
  const url = `${req.baseUrl}/offers/notification?store_id=${req.query.store_id}&productId=${productId}`

  let str = `<a onclick="window.open('${url}&criterias=out_of_stock', '_blank', 'location=yes,height=280,width=580,scrollbars=yes,status=yes');" style="cursor: pointer;">
        Me avise out_of_stock
    </a>`
  str += '<br>'
  str += `<a onclick="window.open('${url}&criterias=price_change', '_blank', 'location=yes,height=280,width=580,scrollbars=yes,status=yes'); " style="cursor: pointer;">
    Me avise price_change
</a>`
  return res.send(str)
}