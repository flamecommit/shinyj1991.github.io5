import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
  word-break: break-all;

  a {
    display: block;
    text-decoration: none;
    padding: 9.6px 11.2px;
    border-radius: 50px;
    background-color: ${props =>
      props.selected
        ? props.theme.colors.selectedTagBackground
        : props.theme.colors.tagBackground};
    color: ${props =>
      props.selected
        ? props.theme.colors.selectedTagText
        : props.theme.colors.tagText};
    text-decoration: none;
    font-size: 14.4px;
    transition: background-color 200ms;

    &:hover {
      background-color: ${props =>
        props.selected
          ? props.theme.colors.hoveredSelectedTagBackground
          : props.theme.colors.hoveredTagBackground};
    }
  }
`

const spaceToDash = text => {
  return text.replace(/\s+/g, "-")
}

const TagList = ({ tagList, count, selected }) => {
  if (!tagList) return null

  if (!count) {
    return (
      <TagListWrapper>
        {tagList.map((tag, i) => (
          <Link key={JSON.stringify({ tag, i })} to={`/tags?q=${tag}`}>
            {spaceToDash(tag)}
          </Link>
        ))}
      </TagListWrapper>
    )
  }

  return (
    <TagListWrapper>
      {tagList.map((tag, i) => (
        <Link
          key={JSON.stringify({ tag, i })}
          to={
            selected === tag.fieldValue ? "/tags" : `/tags?q=${tag.fieldValue}`
          }
          selected={tag.fieldValue === selected}
        >
          {spaceToDash(tag.fieldValue)} ({tag.totalCount})
        </Link>
      ))}
    </TagListWrapper>
  )
}

export default TagList
