import nodemailer from 'nodemailer'

export async function sendEmail(to: string, subject: string, html: string) {
  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: config.emailId,
      clientId: config.emailClientId,
      clientSecret: config.emailClientSecret,
      refreshToken: config.emailRefreshToken,
    },
  })

  const mailOptions = {
    from: `"CWN Website" <${config.emailId}>`,
    to,
    subject,
    html,
  }

  return transporter.sendMail(mailOptions)
}
