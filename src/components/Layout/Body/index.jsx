import React from "react"
import styled from "styled-components"

const BodyWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const Body = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>
}

export default Body
