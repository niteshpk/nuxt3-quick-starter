import { getRouterParam } from 'h3'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { get } from '../../utils/query'

dayjs.extend(relativeTime)

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') // read dynamic slug from URL

  const post = await get<any>(
    `SELECT 
      p.*, 
      b.label as badge_label, 
      a.name as author_name,
      a.id as author_id
    FROM posts p 
    LEFT JOIN badges b ON p.badge_id = b.id 
    LEFT JOIN authors a ON p.author_id = a.id 
    WHERE p.slug = ?`,
    [slug]
  )

  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return {
    ...post,
    createdAt: dayjs(post.created_at).fromNow(),
    badge: { label: post.badge_label },
    authors: [
      {
        id: post.author_id,
        name: post.author_name,
        to: `/author/${post.author_id}`,
        avatar: {
          src: '/me.png',
          alt: post.author_name,
        },
      },
    ],
  }
})
