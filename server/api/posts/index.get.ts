import { query } from '../../utils/query'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Post } from '../../../types/post.types'

dayjs.extend(relativeTime)

const expertTextLimit = 203;

export default defineEventHandler(async (event) => {
  const { length = 10 } = getQuery(event) as { length?: number }

  const rows = await query<any>(`
    SELECT 
      p.id, p.title, p.slug, p.content, p.image, p.created_at,
      b.label AS badge_label,
      a.id AS author_id, a.name AS author_name
    FROM posts p
    LEFT JOIN badges b ON p.badge_id = b.id
    LEFT JOIN authors a ON p.author_id = a.id
    ORDER BY p.created_at DESC
    LIMIT ?
  `, [length])

  const posts: Post[] = rows.map((row: any) => {
    const cleanText = row.content?.replace(/<[^>]+>/g, '') ?? '' // strip HTML tags
    const excerpt =
      cleanText.length > expertTextLimit
        ? cleanText.substring(0, expertTextLimit  - 3).trimEnd() + '...'
        : cleanText

    return {
      id: row.id,
      title: row.title,
      slug: row.slug,
      content: row.content,
      excerpt,
      image: row.image,
      createdAt: dayjs(row.created_at).fromNow(),
      badge: { label: row.badge_label },
      authors: [
        {
          id: row.author_id,
          name: row.author_name,
          to: `/author/${row.author_id}`,
          avatar: {
            src: '/me.png',
            alt: row.author_name,
          },
        },
      ],
    }
  })

  return posts
})
