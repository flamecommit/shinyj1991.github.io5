import React from "react"
import styled from "styled-components"

const Wrapper = styled.h1`
  margin-bottom: 15px;
  font-size: ${props => props.size};
  font-weight: 700;
  line-height: 1.2;
  color: ${props => props.theme.colors.text};
  word-break: break-all;

  > a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.colors.accentColor1};
      // text-decoration: underline;
    }
  }
`

const Title = ({ size, children }) => {
  const sizes = {
    sm: "16px",
    md: "20px",
    bg: "24px",
  }

  return <Wrapper size={sizes[size]}>{children}</Wrapper>
}

export default Title
