import React from "react"
import styled from "styled-components"

import Layout from "components/Layout"

import _ from "lodash"

const members = [
  {id: 1, name: '김철수',},
  {id: 2, name: '박철수',},
  {id: 3, name: '이철수',}
];

const a = _.differenceWith(members, [
  {id: 1, name: '김봉남'},
  {id: 4, name: '이철수'}
], (a, b) => a.name === b.name);

console.log(a)
// console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))

const Wrapper = styled.div`
  display: grid;
  row-gap: 50px;
  padding-block: 30px;
  color: ${props => props.theme.colors.text};

  h2 {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.5;
  }
  h3 {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding-inline: 15px;
  }
`

const PageDemoLodashStudy = () => {
  return (
    <Layout>
      <Wrapper>
        <section>
          <h2>Array</h2>
          <h3>_.chunk</h3>
          <p></p>
        </section>
      </Wrapper>
    </Layout>
  )
}

export default PageDemoLodashStudy