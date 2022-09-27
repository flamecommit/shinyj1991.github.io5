---
title: "[Nuxt.js] Datepicker UI 적용하기"
description:
date: 2021-11-25
update: 2021-11-25
tags:
  - Vue
  - Nuxt
# series: ""
---

Nuxt, Vue 프로젝트에 Datepicker 적용이 처음이라

어떤 라이브러리가 좋을지 이것저것 찾아봤습니다.

많이사용하는 라이브러리는 크게 3가지(`JQuery UI`, `Bootstrap`, `Vue2-datepicker`) 였는데

일단 `JQuery UI`는 JQuery를 사용해야하는 점에서 제외했고

`Bootstrap`역시 사용하는 기능에비해 붙어야하는 모듈의 용량이 너무 커 제외했습니다.

아래 예제는 `Nuxt`프로젝트에 `Vue2-datepicker`를 적용하는 방법입니다.


## 설치

`npm install vue2-datepicker`

## 플러그인 작성

`Nuxt.js`에서 외부 컴포넌트를 사용할땐 `plugin`에서 글로벌 등록을 하는게 편합니다.

그렇게 하면 페이지마다 해당 컴포넌트와 관련 style파일(css, scss)들을 등록하는 수고를 줄일 수 있습니다.

```js [plugins/components.js]
import Vue from 'vue'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'; // datepicker 스타일
import 'vue2-datepicker/locale/ko'; // datepicker 한글 팩

// Datepicker
Vue.component('DatePicker', DatePicker);
```

## 플러그인 등록

```js
nuxt.config.js

export default {
  ...
  plugins: [
    "~/plugins/components",
  ],
  ...
}
```

## 페이지에 적용

```html
pages/example.vue

<template>
  <div>
    <date-picker v-model="date" :format="format" :lang="lang"></date-picker>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      date: null,
      format: 'YYYY-MM-DD',
      lang: {
        days: ['일', '월', '화', '수', '목', '금', '토']
      }
    }
  }
});
</script>
```

## 마무리

`Vue2-datepicker`의 자세한 옵션들은 아래 링크에서 확인할 수 있습니다.

https://www.npmjs.com/package/vue2-datepicker