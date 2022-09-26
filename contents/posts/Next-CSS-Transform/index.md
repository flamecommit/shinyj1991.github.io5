---
title: "Next CSS Transform"
description:
date: 2022-09-26
update: 2022-09-26
tags:
  - CSS
# series: ""
---

`transform` 속성을 사용하던 `rotate`, `scale`, `translate` 함수들이 독립적인 CSS 속성으로 전환되었습니다.<br>
100% 확정된 것은 아니지만 이미 주요 브라우저들에서 쉽게 테스트 해볼 수 있습니다.

```scss
// before
div {
  transform: scale(1.2), rotate(45deg);
}

// after
div {
  scale: 1.2;
  rotate: 45deg;
}
```