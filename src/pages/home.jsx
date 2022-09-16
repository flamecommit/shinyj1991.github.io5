import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    color: red;
  }
`

const PageHome = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
    </Wrapper>
  )
}

export default PageHome