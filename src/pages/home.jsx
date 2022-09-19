import { useState, useEffect } from "react"
import styled from "styled-components"
import { parseMarkdown } from "../utils/markdown";

const Wrapper = styled.div`
  h1 {
    color: red;
  }
`

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../content', false, /\.md$/))
  .sort()
  .reverse();

const PageHome = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const posts = await Promise.all(markdownFiles
        .map((file) => fetch(file)
          .then((res) => res.text())
        )
      );

      setPosts(parseMarkdown(posts));
    }

    fetchPosts();

  }, [])

  console.log('component2')

  return (
    <Wrapper>
      <h1>Home</h1>
      {
        posts.map((post, idx) =>
          <div key={idx}>
            {post.headers.title}
            <div>
              {post.headers.createAt.toString()}
            </div>
          </div>
        )
      }
    </Wrapper>
  )
}

export default PageHome