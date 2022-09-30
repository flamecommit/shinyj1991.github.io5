import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { animateScroll } from "react-scroll"

import useScroll from "hooks/useScroll"

import getElementOffset from "utils/getElmentOffset"

const TocWrapper = styled.dl`
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;

  dt {
    overflow: hidden;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
  }
  dd {
    display: grid;
    row-gap: 8px;
    position: sticky;
    overflow-y: auto;
    top: 86px;
    width: 240px;
    max-height: calc(100% - 185px);
    margin-left: 48px;
    padding-inline: 16px;
    margin-block: -5px;
    padding-block: 5px;

    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.scrollTrack};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollHandle};
    }
  }

  @media (max-width: 1300px) {
    display: none;
  }
`

const ParagraphTitle = styled.button`
  background: none;
  border: none;
  display: block;
  text-align: left;
  margin-left: ${props => (props.subtitle ? 19.2 : 0)}px;
  font-size: 14px;
  color: ${props => props.theme.colors.mutedText};
  line-height: 1.3;
  transition: translate 200ms, color 200ms;

  &.active {
    translate: -11px 0;
    color: ${props => props.theme.colors.secondaryText};
  }
  &:hover {
    color: ${props => props.theme.colors.text};
    cursor: pointer;
  }
`

const Toc = ({ items }) => {
  const { y } = useScroll()

  const [headers, setHeaders] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    setHeaders(
      [
        ...document.querySelectorAll("#article-body > h2, #article-body > h3"),
      ].map(element => getElementOffset(element).top)
    )
  }, [])

  useEffect(() => {
    headers.forEach((header, i) => {
      if (header - 300 < y) {
        setActive(i)
        return
      }
    })
  }, [y])

  const handleClickTitle = index => {
    animateScroll.scrollTo(headers[index] - 66)
  }

  return (
    <TocWrapper>
      <dt>Table of contents</dt>
      <dd>
        {items.map((item, i) => (
          <ParagraphTitle
            key={i}
            subtitle={item.tagName === "H3"}
            onClick={() => handleClickTitle(i)}
            className={i === active && "active"}
          >
            {item.innerText}
          </ParagraphTitle>
        ))}
      </dd>
    </TocWrapper>
  )
}

export default Toc
