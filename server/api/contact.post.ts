import { defineEventHandler, readBody } from 'h3'
import { insert } from '../utils/query'
import { sendEmail } from '../utils/sendEmail'

export default defineEventHandler(async (event) => {
  const { name, email, phone, whatsapp, message } = await readBody(event)

  if (!name || !email || !message) {
    return { success: false, message: 'Name, Email, and Message are required.' }
  }

  try {
    const insertId = await insert(
      `INSERT INTO contacts (name, email, phone, whatsapp, message) VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone, whatsapp, message]
    )

    await sendEmail('your@email.com', `New contact from ${name}`, `
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `)

    return { success: true, message: 'Submitted successfully!', id: insertId }
  } catch (err) {
    console.error('Submit failed:', err)
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
})
