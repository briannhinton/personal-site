import Author from '../../types/author'

type Props = {
  title: string
  date: string
  author: Author
}

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default PostHeader
