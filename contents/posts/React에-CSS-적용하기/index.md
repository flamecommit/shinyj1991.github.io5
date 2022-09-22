---
title: "React에 CSS 적용하기"
description:
date: 2022-09-20
update: 2022-09-20
tags:
  - React
  - CSS
# series: ""
---

React에 CSS를 적용하는 방법은 여러가지가 있습니다.

## 1. inline styling

```jsx
const Example = () => {
  return (
    <div style={{color: 'red'}}>
      <p>Text</p>
    </div>
  )
}
```

html태그 `style` 속성에 직접 json형태의 CSS를 할당하는 방법입니다.

같은 방법으로 CSS를 javascript 변수에 담아 사용할 수도 있습니다.

```jsx
const Example = () => {
  const styleObj = {
    color: 'red'
  }

  return (
    <div style={styleObj}>
      <p>Text</p>
    </div>
  )
}
```

## 2. CSS file import

별도의 css 파일을 만들어 import 하는 방법입니다.

```css
/* Example.css */

.txt {
  color: red;
}
```

```jsx
// Example.jsx

import './Example.css'

const Example = () => {
  return (
    <div className="txt">
      <p>Text</p>
    </div>
  )
}
```

이 방법은 CSS적용 범위가 전역이라는 점을 주의해야합니다.

만약 작성한 CSS를 해당 컴포넌트에만 적용하고 싶다면<br>
CSS 파일명과 확장자 사이에 `.module`을 추가해야 합니다.

```css
/* Example.module.css */

.txt {
  color: red;
}
```

```jsx
// Example.jsx

import './Example.module.css'

const Example = () => {
  return (
    <div className="txt">
      <p>Text</p>
    </div>
  )
}
```

## 3. styled-components

styled-components 패키지를 설치하면 컴포넌트 내부에 CSS를 작성할 수 있습니다.<br>
개인적으로 가장 추천하는 방식입니다.

```cmd
npm install styled-components
or
yarn add styled-components
```

```jsx
import styled from "styled-components"

// styled
const StyledWrapper = styled.div`
  color: red;
`

const Example = () => {
  return (
    <StyledWrapper>
      <p>Text</p>
    </StyledWrapper>
  )
}
```