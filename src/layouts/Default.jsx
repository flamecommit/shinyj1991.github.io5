import styled from "styled-components";
import { Link } from "react-router-dom"

import GlobalStyles from "../components/GlobalStyles"

const Wrapper = styled.div`
  main {
    padding: 50px;
  }
`

const LayoutDefault = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <header>
          <h1>Header</h1>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>Footer</p>
        </footer>
      </Wrapper>
    </>
  )
}

export default LayoutDefault