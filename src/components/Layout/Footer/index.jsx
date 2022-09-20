import React from "react"
import styled from "styled-components"

import { title } from "../../../../blog-config"

const FooterWrapper = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.colors.divider};
  font-size: 11pt;
  font-weight: lighter;
  color: ${props => props.theme.colors.secondaryText};

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="inner">
        © {title}, Built with Gatsby and{" "}
        <a href="https://github.com/devHudi/gatsby-starter-hoodie" target="blank">
          gatsby-starter-hoodie
        </a>{" "}
        theme.
      </div>
    </FooterWrapper>
  )
}

export default Footer
