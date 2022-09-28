import React from "react"
import styled from "styled-components"
import SEO from "components/SEO"

import Layout from "components/Layout"

import { title, description, siteUrl } from "../../blog-config"

const AboutWrapper = styled.div`
`

const AboutPage = () => {
  return (
    <Layout>
      <SEO title={title} description={description} url={siteUrl} />

      <AboutWrapper>
        <h1>About YJ.</h1>
      </AboutWrapper>
    </Layout>
  )
}

export default AboutPage