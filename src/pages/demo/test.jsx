import React from "react"
import styled from "styled-components"

import Layout from "components/Layout"

const Wrapper = styled.div`
  padding: 30px;
  color: #fff;
`

const PageDemoTest = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <p>Demo Test</p>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default PageDemoTest