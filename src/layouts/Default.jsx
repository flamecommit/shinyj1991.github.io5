import styled from "styled-components";

import GlobalStyles from "../components/GlobalStyles"

import TheHeader from "../components/The/Header"
import TheFooter from "../components/The/Footer"

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
        <TheHeader />

        <main>
          {children}
        </main>

        <TheFooter />
      </Wrapper>
    </>
  )
}

export default LayoutDefault