import React from "react"
import styled from "styled-components"

import Layout from "components/Layout"

const Wrapper = styled.div`
  display: grid;
  row-gap: 50px;
  padding-block: 30px;
  color: #fff;

  h2 {
    margin-bottom: 10px;
    font-size: 16px;
  }
  picture {
    display: block;
  }
  img {
    width: 480px;
    max-width: 100%;
  }
  .type-2 {
    @media (max-width: 768px) {
      content: url(${require('./mobile.jpg')});
    }
  }
`

const PageDemoResponsiveWebImage = () => {
  return (
    <Layout>
      <Wrapper>
        <section>
          <h2>1. picture 태그를 사용한 이미지 분기 처리</h2>
          <picture>
            <source media="(max-width: 768px)" srcSet={require('./mobile.jpg')} />
            <img src={require('./desktop.jpg')} />
          </picture>
        </section>
        <section>
          <h2>2. CSS의 content속성을 사용한 이미지 분기 처리</h2>
          <img className="type-2" src={require('./desktop.jpg')} alt="" />
        </section>
      </Wrapper>
    </Layout>
  )
}

export default PageDemoResponsiveWebImage