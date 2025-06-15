import { defineEventHandler, readBody } from 'h3'
import { insert } from '../../utils/query'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { title, slug, content, image, badgeId, authorId } = body

  if (!title || !slug || !content) {
    throw createError({ statusCode: 400, message: 'Title, slug, and content are required' })
  }

  const sql = `INSERT INTO posts (title, slug, content, image, badge_id, author_id) VALUES (?, ?, ?, ?, ?, ?)`
  const values = [title, slug, content, image, badgeId, authorId]

  const id = await insert(sql, values)

  return { success: true, message: 'Blog created', id }
})
