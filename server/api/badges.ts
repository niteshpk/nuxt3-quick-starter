import { defineEventHandler } from 'h3'
import { query } from '../utils/query'

export default defineEventHandler(async () => {
  const rows = await query('SELECT id, label FROM badges')
  return rows
})