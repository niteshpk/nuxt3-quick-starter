import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Log to verify
  console.log('Received contact submission:', body)

  // TODO: Save to DB or send email here

  return { success: true, message: 'Message received!' }
})
