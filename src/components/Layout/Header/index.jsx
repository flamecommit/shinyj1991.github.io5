import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import { title } from "../../../../blog-config"

import {
  FaSun,
  FaMoon,
  FaTags,
  // FaRss,
  FaSearch,
  FaListUl,
} from "react-icons/fa"

const HeaderWrapper = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 320px;
  background-color: ${props => props.theme.colors.headerBackground};
  box-shadow: 0 0 8px ${props => props.theme.colors.headerShadow};
  backdrop-filter: blur(5px);
  z-index: 999;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.height}px;
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const BlogTitle = styled.div`
  font-family: "roboto", sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: ${props => props.theme.colors.title};

  > a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;

  a {
    display: flex;
    align-items: center;
    width: 20px;
    height: 24px;
  }
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;

    path {
      fill: ${props => props.theme.colors.icon};
      transition: fill 0.3s;
    }
    &:hover {
      path {
        fill: ${props => props.theme.colors.text};
      }
    }
  }

  @media (max-width: 768px) {
    column-gap: 10px;
  }
`

const ToggleWrapper = styled.div`
  width: 20px;
  height: 20px;
  overflow: hidden;
  box-sizing: border-box;
`

const IconRail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
  top: ${props => (props.theme.name === "light" ? "-20px" : "0px")};
  transition: top 0.4s;

  svg {
    transition: opacity 0.25s;

    &:first-child {
      opacity: ${props => (props.theme.name === "light" ? 0 : 1)};
    }
    &:last-child {
      opacity: ${props => (props.theme.name === "dark" ? 0 : 1)};
    }
  }
`

const Header = ({ height, toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Inner height={height}>
        <BlogTitle>
          <Link to="/">SIMPLIZM</Link>
        </BlogTitle>
        <Menu>
          <ToggleWrapper>
            <IconRail>
              <FaSun onClick={toggleTheme} />
              <FaMoon onClick={toggleTheme} />
            </IconRail>
          </ToggleWrapper>
          <Link to="/tags">
            <FaTags />
          </Link>
          <Link to="/series">
            <FaListUl />
          </Link>
          {/* <Link to="/rss.xml">
            <FaRss />
          </Link> */}
          <Link to="/search">
            <FaSearch style={{ marginRight: 0 }} />
          </Link>
        </Menu>
      </Inner>
    </HeaderWrapper>
  )
}

export default Header
