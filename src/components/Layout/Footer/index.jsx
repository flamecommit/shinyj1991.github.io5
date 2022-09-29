import React from "react"
import styled from "styled-components"

import { title } from "../../../../blog-config"

const FooterWrapper = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.divider};
  font-size: 12px;
  line-height: 1.5;
  font-weight: lighter;
  color: ${props => props.theme.colors.secondaryText};

  .copyright {
    word-break: keep-all;
  }
  a {
    text-decoration: none;
    display: inline-block;
    margin: 0 0.3em;
    color: ${props => props.theme.colors.text};
  }
`

const Footer = ({ height }) => {
  return (
    <FooterWrapper height={height}>
      <div className="copyright">
        &copy; {title}. Built with Gatsby and gatsby-starter-hoodie theme.
      </div>
    </FooterWrapper>
  )
}

export default Footer
