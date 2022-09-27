---
title: "Next CSS Transform"
description:
date: 2022-09-27
update: 2022-09-27
tags:
  - CSS
# series: ""
---

`transform` 속성에 포함된 `rotate`, `scale`, `translate` 함수들이 독립적인 CSS 속성으로 분리된다고 합니다.<br>
각 함수들이 분리됨에 따라 `transition` 을 사용한 애니메이션을 구현하기 편리해질 것으로 기대가 되네요.<br>
아직 100% 확정된 것은 아니지만 이미 주요 브라우저들에 적용되어있어 직접 테스트 해볼 수 있습니다.

```scss
// before
div {
  transform: scale(1.2) rotate(45deg);
}

// after
div {
  scale: 1.2;
  rotate: 45deg;
}
```