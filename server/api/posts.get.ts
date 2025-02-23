import { Post } from "@mytypes/post.types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const getRandomDate = () => {
  const yearsAgo = Math.floor(Math.random() * 2) + 5; // Between 20 and 50 years ago

  return dayjs().subtract(yearsAgo, "years");
};

export default defineEventHandler(async (event) => {
  const { length }: { length: number } = await getQuery(event);

  const posts = Array.from(
    { length: length },
    (_, i) =>
      ({
        id: i,
        title: `Post ${i + 1}`,
        slug: `post-${i + 1}`,
        content: ` Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive. This is post number ${
          i + 1
        }`,
        image: "https://picsum.photos/id/10/640/360",
        createdAt: getRandomDate().fromNow(),
        badge: { label: "New" },
        authors: [
          {
            id: 1,
            name: "John Doe",
            to: "/author/1",
            avatar: { src: "https://i.pravatar.cc/200", alt: "John Doe" },
          },
        ],
      } as Post)
  );

  return posts;
});
