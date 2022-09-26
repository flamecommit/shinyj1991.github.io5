---
title: "반응형이미지를 구현하는 두가지 방법"
description:
date: 2022-09-21
update: 2022-09-21
tags:
  - CSS
  - html
  - 반응형
  - 이미지
# series: ""
---

## 반응형이미지란?

클라이언트 환경에 따라 최적화된 이미지 리소스를 불러와 렌더링하는 이미지 또는 기술을 말합니다.

`React` 나 `Vue.js` 같은 모던 프론트 프레임워크 환경에선 각 프레임워크가 제공하는 조건부 렌더링 문법을 사용하여 반응형 이미지를 구현할 수 있으며
코어 `javascript` 만을 사용하여도 큰 어려움 없이 구현할 수 있습니다.

하지만 오늘은 javascript의 도움 없이 html과 CSS만으로 반응형 이미지를 구현하는 두가지 방법을 다뤄보겠습니다.

## picture tag

첫번째 방법은 html의 `picture` 태그를 사용하는 것입니다.<br>
`picture` 태그는 img 요소의 다중 이미지 리소스를 위한 컨테이너의 역할을 합니다.

`source` 태그를 사용하면 각 환경에 잘 어울리는 이미지를 불러올 수 있으며<br>
`img` 태그는 기본 이미지를 불러옵니다.

```html
<picture>
  <source media="(max-width: 768px)" srcset="./mobile.jpg">
  <img src="./desktop.jpg" alt="device">
</picture>
```

## CSS content

두번째 방법은 CSS의 `content` 속성을 사용하여 img 리소스를 스위칭 하는 것입니다.<br>
`img` 태그에는 기본 이미지를 불러오고 CSS의 미디어쿼리로 환경에 따른 이미지 리소스를 스위칭 합니다.

```html
<img src="./desktop.jpg" alt="device">
```

```CSS
@media screen and(max-width: 768px) {
  img {
    content: url(./mobile.jpg);
  }
}
```