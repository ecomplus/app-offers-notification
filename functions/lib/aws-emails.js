const nodemailer = require('nodemailer')
const aws = require('aws-sdk')

module.exports = (store, from, to, subject, html) => {
  return new Promise((resolve, reject) => {
    aws.config.update({
      region: 'us-west-2'
    })

    const transporter = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: '2010-12-01'
      })
    })

    const options = {
      from: {
        name: store,
        address: 'noreply@e-com.club'
      },
      to,
      subject,
      html,
      replyTo: from,
      headers: {
        'Reply-To': from,
        'Loja': store
      }
    }

    transporter.sendMail(options, (err, info) => err ? reject(err) : resolve(info))
  })
}