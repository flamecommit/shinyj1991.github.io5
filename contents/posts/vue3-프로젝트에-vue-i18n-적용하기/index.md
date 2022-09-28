---
title: "vue3 프로젝트에 vue-i18n 적용하기"
description:
date: 2022-09-28
update: 2022-09-28
tags:
  - Vue
# series: ""
---

회사에서 새로 진행하는 프로젝트에 국문과 영문, 두가지 언어로 구축해야하는 이슈가 있었습니다.<br>
`vue.js` 프로젝트에서 `vue-i18n` 이라는 모듈을 사용하면 다국어 서비스를 지원할 수 있는데요<br>
오늘은 `vue.js (vue3)` 환경에서 `vue-i18n` 모듈을 설치부터 적용하는 법까지 정리해보았습니다.


### 설치

Vue3에서 사용하기 위해선 9버전 이상의 vue-i18n 모듈을 설치해야 합니다.

```
npm install vue-i18n

or

yarn add vue-i18n
```

### 셋팅

설치가 끝나면 `main.js` 파일에서 `vue-i18n` 을 추가해줍니다.

```js
/* src/main.js */

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import en from './langs/en.json'
import ko from './langs/ko.json'

const vueApp = createApp(App)

const i18n = createI18n({
  legacy: false, // composition api 를 사용하려면 false
  locale: 'ko', // 사용 언어
  fallbackLocale: 'en', // 요청한 언어가 없을 때 대체할 언어
  messages: { en, ko }
})

vueApp.use(i18n)

vueApp.mount('#app')
```

```json
/* src/langs/ko.json */
{
  "button": {
    "add": "추가",
    "delete": "삭제"
  }
}

/* src/langs/en.json */
{
  "button": {
    "add": "Add",
    "delete": "Delete"
  }
}
```

### 적용

```html
<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t }= useI18n()

const state = reactive({
  langs: ['ko', 'en']
})
</script>

<template>
  <div>
    <p>{{ t('button.add') }}</p>

    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in state.langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>
```
