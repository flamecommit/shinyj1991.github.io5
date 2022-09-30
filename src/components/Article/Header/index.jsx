import React from "react"
import styled from "styled-components"

import { author } from "/blog-config"

import Divider from "components/Divider"
import TagList from "components/TagList"

const Wrapper = styled.div`
  @media (max-width: 798px) {
    padding: 0 15px;
  }
`

const ArticleTitle = styled.h1`
  margin-bottom: 24px;
  line-height: 1.2;
  font-size: 44px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};

  @media (max-width: 798px) {
    font-size: 36px;
    margin-bottom: 18px;
  }
`

const Information = styled.div`
  margin-bottom: 32px;
  font-size: 16px;
`

const Author = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`

const Date = styled.span`
  font-weight: 300;
  color: ${props => props.theme.colors.secondaryText};
`

const Header = ({ title, date, tags, minToRead }) => {
  return (
    <Wrapper>
      <ArticleTitle> {title} </ArticleTitle>
      <Information>
        <Author> @{author} </Author>
        <Date>· {date} </Date>
        <Date>· {minToRead} min read </Date>
      </Information>
      {tags && <TagList tagList={tags} />}
      <Divider />
    </Wrapper>
  )
}

export default Header
