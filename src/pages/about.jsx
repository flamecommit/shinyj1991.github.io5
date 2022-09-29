import React from "react"
import styled from "styled-components"
import SEO from "components/SEO"
import { Link } from "gatsby"
import _ from "lodash"

import Layout from "components/Layout"
import history from "assets/data/history"

import { title, description, siteUrl } from "../../blog-config"

const AboutWrapper = styled.div`
  display: grid;
  row-gap: 50px;
  line-height: 1.5;
  color: ${props => props.theme.colors.text};

  h1 {
    font-weight: 700;
    font-size: 32px;
  }
  section {
    h2 {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 12px;
    }
    a {
      color: #71ac42;
    }
    .history {
      display: grid;
      margin-block: -15px;

      li {
        padding-block: 15px;
        font-size: 14px;
        color: ${props => props.theme.colors.secondaryText};

        .company {
          .name {
            font-size: 16px;
            font-weight: 700;
            color: ${props => props.theme.colors.text};
          }
          .period {
            margin-left: 5px;
            font-size: 12px;
            color: ${props => props.theme.colors.secondaryText};
          }
        }
        &:not(:last-child) {
          border-bottom: 1px solid ${props => props.theme.colors.divider};
        }
      }
    }
  }
`

const AboutPage = () => {
  return (
    <Layout>
      <SEO title={title} description={description} url={siteUrl} />

      <AboutWrapper>
        <h1>About YJ.</h1>
        <section>
          <h2>🚀 Project.</h2>
          제가 참여한 프로젝트들은 <a href="https://simplizm.notion.site/Project-ab5993b7b6a9403088848359cd1f0b48" target="_blank" rel="noreferrer">여기</a>에서 보실 수 있습니다.
        </section>
        <section>
          <h2>💼 History.</h2>
          <ol className="history">
            {history.map(c => 
              <li key={c.company}>
                <div className="company">
                  <strong className="name">{c.company}</strong>
                  <span className="period">({c.period})</span>
                </div>
                <div className="team">{c.team} - {c.position}</div>
                <div className="duty">{c.duty}</div>
                <div className="skill">{_.join(c.skill, ', ')}</div>
              </li>
            )}
          </ol>
        </section>
        <section>
          <h2>Github.</h2>
          <a href="#self">move to github</a>
        </section>
        <section>
          <h2>Blog.</h2>
          <Link to="/">move to blog</Link>
        </section>
      </AboutWrapper>
    </Layout>
  )
}

export default AboutPage