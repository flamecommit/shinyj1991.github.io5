import React, { useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { setLight, setDark } from "reducers/theme"
import { light, dark } from "assets/theme"
import GlobalStyles from "components/GlobalStyles"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import SEO from "components/SEO"
import { title, description, siteUrl } from "/blog-config"

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  min-width: 320px;
  min-height: 100vh;
  padding-top: ${props => props.headerHeight}px;
  padding-bottom: ${props => props.footerHeight}px;
`

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.theme)

  const headerHeight = 56
  const footerHeight = 96

  let isSystemDarkMode = null
  if (typeof window !== "undefined") {
    isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  let localTheme = null
  if (typeof localStorage !== "undefined") {
    localTheme = localStorage.getItem("theme")
  }

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    dispatch(nextTheme === "dark" ? setDark : setLight)
    localStorage.setItem("theme", nextTheme)
  }

  useEffect(() => {
    if (isSystemDarkMode && !localTheme)
      dispatch(isSystemDarkMode ? setDark : setLight)
    else if (localTheme) dispatch(localTheme === "dark" ? setDark : setLight)
  }, [])

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <SEO title={title} description={description} url={siteUrl} />
      <Wrapper headerHeight={headerHeight} footerHeight={footerHeight}>
        <GlobalStyles />
        <Header height={headerHeight} toggleTheme={toggleTheme} />
        <Body>{children}</Body>
        <Footer height={footerHeight} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
