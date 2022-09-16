import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background: #333;
  color: #fff;
`

const TheHeader = () => {
  return (
    <>
      <Wrapper>
        <h1><Link to="/">SIMPLIZM</Link></h1>
        <nav className="gnb">
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </>
  )
}

export default TheHeader