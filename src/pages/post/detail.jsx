import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { parseMarkdown } from "../../utils/markdown";

const PagePostDetail = () => {
  const { title } = useParams();
  const [post, setPost] = useState('');

  const markdownFile = require(`../../content/${title}.md`);

  useEffect(() => {
    async function fetchPost() {

      const post = await fetch(markdownFile).then((res) => res.text())

      setPost(parseMarkdown(post));
    }

    fetchPost();

  }, [])

  return (
    <div>
      <h1>Detail</h1>
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </div>
  )
}

export default PagePostDetail