import React from "react"
import styled from "styled-components"

import { title } from "../../../../blog-config"

const FooterWrapper = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.colors.divider};
  font-size: 11pt;
  font-weight: lighter;
  color: ${props => props.theme.colors.secondaryText};

  a {
    margin: 0 0.3em;
    color: ${props => props.theme.colors.text};
  }
`

const Footer = ({ height }) => {
  return (
    <FooterWrapper height={height}>
      <div className="copyright">&copy; 2022. {title} all rights reserved.</div>
    </FooterWrapper>
  )
}

export default Footer
