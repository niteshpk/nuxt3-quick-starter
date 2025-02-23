export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  image: string;
  authors: Author[];
  badge: Badge;
  createdAt: string;
}

export interface Author {
  id?: number;
  name: string;
  avatar: Avatar;
  to: string;
}

export interface Avatar {
  src: string;
  alt?: string;
}

export interface Badge {
  label: string;
}
