import styled from "styled-components"

const Wrapper = styled.footer`
  padding: 30px;
  background: #000;
  color: #fff;

  p {
    text-align: center;
  }
`

const TheFooter = () => {
  return (
    <>
      <Wrapper>
        <p>Footer</p>
      </Wrapper>
    </>
  )
}

export default TheFooter