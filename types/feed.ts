import Author from './author'

type FeedType = {
  slug: string
  title: string
  date: string
  category: string
  author: Author
  summary: string
  ogImage: {
    url: string
  }
  content: string
}
