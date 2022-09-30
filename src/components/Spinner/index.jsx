import React from "react"
import styled, { useTheme } from "styled-components"
import MDSpinner from "react-md-spinner"

const SpinnerWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = () => {
  const theme = useTheme()

  return (
    <SpinnerWrapper>
      <MDSpinner singleColor={theme.colors.spinner} />
    </SpinnerWrapper>
  )
}

export default Spinner