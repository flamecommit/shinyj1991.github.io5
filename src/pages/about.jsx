import React from "react"
import styled from "styled-components"
import SEO from "components/SEO"
import { Link } from "gatsby"
import _ from "lodash"

import Layout from "components/Layout"
import history from "assets/data/history"

import { title, description, siteUrl } from "../../blog-config"

const AboutWrapper = styled.div`
  padding-bottom: 200px;
  display: grid;
  row-gap: 100px;
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

      li {
        padding-block: 40px;
        padding-inline: 15px;
        font-size: 14px;
        color: ${props => props.theme.colors.secondaryText};
        display: flex;

        .company {
          flex-basis: 160px;

          .name {
            font-size: 20px;
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
          <a href="https://simplizm.notion.site/Project-ab5993b7b6a9403088848359cd1f0b48" target="_blank" rel="noreferrer">이곳</a>에서 제가 참여한 프로젝트들을 볼 수 있습니다.
        </section>
        <section>
          <h2>💼 History.</h2>
          <ol className="history">
            {history.map(c => 
              <li key={c.company}>
                <div className="company">
                  <div className="name">{c.company}</div>
                  <div className="period">{c.period}</div>
                </div>
                <div className="detail">
                  <div className="team">{c.team} - {c.position}</div>
                  <div className="duty">{c.duty}</div>
                  <div className="skill">{_.join(c.skill, ', ')}</div>
                </div>
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