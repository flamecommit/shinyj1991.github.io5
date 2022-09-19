import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { parseMarkdown } from "../utils/markdown";

const Wrapper = styled.div``

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../content', false, /\.md$/))
  .sort()
  .reverse();

const PageHome = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const filenames = [];
      const posts = await Promise.all(markdownFiles
        .map((file) => fetch(file).then((res) => {
          const p = file.split('/')
          filenames.push(p[p.length - 1].split('.')[0]);

          return res.text()
        })
      ));

      const result = posts.map((post, index) => ({
        filename: filenames[index],
        ...parseMarkdown(post)
      }))

      setPosts(result);
    }

    fetchPosts();

  }, [])

  console.log('component2')

  return (
    <Wrapper>
      <h1>Home</h1>
      {
        posts.map((post, idx) =>
          <Link to={`/post/${post.filename}`} key={idx}>
            <div>
              {post.filename}
            </div>
            <div>
              {post.headers.title}
            </div>
            <div>
              {post.headers.createAt.toString()}
            </div>
          </Link>
        )
      }
    </Wrapper>
  )
}

export default PageHome