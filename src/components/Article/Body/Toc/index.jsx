import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

import { animateScroll } from "react-scroll"

import useScroll from "hooks/useScroll"

import getElementOffset from "utils/getElmentOffset"

const TocWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;

  > div {
    position: sticky;
    top: 86px;
    padding-right: 20px;
    padding-left: 16px;
    margin-left: 48px;
    width: 240px;
    max-height: calc(100% - 185px);
    overflow-y: auto;

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

const ParagraphTitle = styled.div`
  margin-bottom: 8px;
  padding-left: ${props => (props.subtitle ? 19.2 : 0)}px;
  font-size: 14.4px;
  color: ${props => props.theme.colors.mutedText};
  line-height: 1.3;
  transition: all 0.2s;

  ${props =>
    props.active &&
    css`
      transform: translate(-11.2px, 0);
      color: ${props => props.theme.colors.secondaryText};
    `}

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
      <div>
        {items.map((item, i) => (
          <ParagraphTitle
            key={i}
            subtitle={item.tagName === "H3"}
            active={i === active}
            onClick={() => handleClickTitle(i)}
          >
            {item.innerText}
          </ParagraphTitle>
        ))}
      </div>
    </TocWrapper>
  )
}

export default Toc
