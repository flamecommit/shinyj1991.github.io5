import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import _ from "lodash"
import { AiFillGithub } from "react-icons/ai"
import { IoIosRocket } from "react-icons/io"
import { TfiWorld } from "react-icons/tfi"

import Layout from "components/Layout"
import history from "assets/data/history"

const AboutWrapper = styled.div`
  padding-bottom: 200px;
  line-height: 1.5;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    padding-inline: 15px;
    padding-bottom: 100px;
  }
`

const AboutTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 50px;
  color: ${props => props.theme.colors.text};
`

const AboutContents = styled.div`
  display: grid;
  row-gap: 60px;

  section {
    h2 {
      display: flex;
      align-items: center;
      column-gap: 10px;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 12px;
    }
    a {
      text-decoration: none;
      color: #71ac42;

      &:hover {
        text-decoration: underline;
      }
    }
    .history {
      display: grid;

      li {
        padding-block: 36px;
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
      <AboutWrapper>
        <AboutTitle>About YJ.</AboutTitle>

        <AboutContents>
          {/* <section>
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
          </section> */}
          {/* <section>
            <h2>Keyword.</h2>
            <div className="keyword">
              <a href="#self" target="_blank" rel="noreferrer">Guitar</a>
              <a href="#self" target="_blank" rel="noreferrer">Book</a>
              <a href="#self" target="_blank" rel="noreferrer">Run</a>
            </div>
          </section> */}
          <section>
            <h2><TfiWorld /> Website.</h2>
            <a href="https://www.simplizm.xyz/" target="_blank" rel="noreferrer">move to website</a>
          </section>
          <section>
            <h2><IoIosRocket /> Project.</h2>
            <a href="https://simplizm.notion.site/Project-ab5993b7b6a9403088848359cd1f0b48" target="_blank" rel="noreferrer">move to project</a>
          </section>
          <section>
            <h2><AiFillGithub /> Github.</h2>
            <a href="https://github.com/shinyj1991" target="_blank" rel="noreferrer">move to github</a>
          </section>
          {/* <section>
            <h2>Blog.</h2>
            <Link to="/">move to blog</Link>
          </section> */}
        </AboutContents>
      </AboutWrapper>
    </Layout>
  )
}

export default AboutPage