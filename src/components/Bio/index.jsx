import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { FaGithub, FaEnvelope } from "react-icons/fa"
import { SiNotion } from "react-icons/si"

import { siteUrl, description, author, links } from "../../../blog-config"

const BioWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  @media (max-width: 768px) {
    padding-inline: 15px;
  }
`

const profileImageRoot = typeof window !== "undefined" && window.location.host === "localhost:8000" ? "http://localhost:8000" : siteUrl

const Profile = styled.div`
  flex: 0 0 auto;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: #f7f7f7 url(${profileImageRoot}/profile.jpg) center center / cover no-repeat;
`

const Author = styled.div`
  margin-bottom: 4.8px;

  a {
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`

const Description = styled.div`
  margin-bottom: 11.2px;
  line-height: 1.5;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryText};
`

const LinksWrapper = styled.div`
  display: flex;
  column-gap: 9.6px;

  svg {
    width: 25.6px;
    height: 25.6px;
    cursor: pointer;

    path {
      fill: ${props => props.theme.colors.icon};
      transition: fill 0.3s;
    }
  }

  a:hover svg path {
    fill: ${props => props.theme.colors.text};
  }
`

const Bio = () => {
  const { github, email, notion } = links

  return (
    <BioWrapper id="bio">
      <Profile />
      <div>
        <Author>
          <Link to="/about">@{author}</Link>
        </Author>
        <Description>{description}</Description>
        <LinksWrapper>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={notion} target="_blank" rel="noreferrer">
            <SiNotion />
          </a>
          <a href={email} target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
        </LinksWrapper>
      </div>
    </BioWrapper>
  )
}

export default Bio
