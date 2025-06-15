import { defineEventHandler, readBody } from 'h3'
import { sendEmail } from '../utils/sendEmail'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {receiverId} = useRuntimeConfig()

  const html = `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone}</p>
    <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>
    <p><strong>Message:</strong><br/>${body.message}</p>
  `

  try {
    await sendEmail({
      to: receiverId,
      subject: `New message from ${body.name} at CWN`,
      html,
    })

    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, message: 'Failed to send email' }
  }
})
