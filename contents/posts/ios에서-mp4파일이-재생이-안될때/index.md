---
title: "Nuxt3 Service 배포 삽질 기록 (feat. pm2)"
description:
date: 2022-12-22
update: 2022-12-22
tags:
  - nuxt
  - nuxt3
  - deploy
# series: ""
---

이번에 새로 시작한 `Nuxt3` 프로젝트를 배포하면서 겪었던 시행착오들을 정리해 보았습니다.

기존에 사용하던 `Nuxt2` 와 사용방법이 여기저기 변화했지만 공식문서에 정리가 잘 되어있어 작업하는것은 크게 어렵지 않았습니다.

기억나는 변경사항으로는 `nuxt.config.js` 파일에서 `modules`와 `buildModules`가 `modules`로 통합되었다는 것과

`plugins` 디렉토리에 있는 `js` 또는 `ts` 파일을 `nuxt.config.js` 에서 호출하지 않아도 자동으로 실행해주는 것이었습니다.

전체적으로 이전 버전 보다 개발 편의성이 높아졌다고 느꼈습니다.

여차저차 공식문서와 구글링을 통해 개발을 마무리 하고 배포 단계에 도달했습니다.

`Nuxt`의 번들링은 `nuxt build` 와 `nuxt generate` 두 종류가 있습니다.

`nuxt build`는 `ssr` 을 포함한 정규 빌드 방식이고 `nuxt generate` 는 정적 웹사이트 생성기라고 보시면 됩니다.

이번에 진행한 프로젝트는 http 통신이 없는 정보제공성 사이트였기 때문에 `generate` 로 배포하기로 결정했습니다.

하지만 `generate`로 만들어진 결과물 사이트를 서버에 배포해 보니 이곳 저곳에서 개발환경과는 다르게 동작하는 것을 확인할 수 있었습니다. (error 페이지 렌더링 등등)

아마 `Nuxt3` 가 처음 릴리즈(현재 버전 3.0.0)된 버전이기 때문에 아직 불안정한 것이라 생각합니다. (이래서 프레임워크는 검증기간을 거친 후 실제서비스에 적용해야 합니다.)

`nuxt generate` 결과물 에서 발생하는 원인불명의 문제들을 해결할 방법을 찾을 수 없어 결국 `nuxt build` 방식으로 배포방법을 바꾸기로 했습니다.

`Nuxt3` 에서는 작업물을 `build` 한 다음에 `node .output/server/index.mjs` 명령어를 통해 실행시켜야 합니다.

하지만 그냥 이렇게 실행하게 되면 추후 개발코드를 재배포 할 때, 배포하는 동안 서비스가 내려가는 문제가 발생합니다.

이러한 문제는 `pm2` 를 사용하여 해결할 수 있습니다.

`pm2`란 Node.js 어플리케이션을 쉽게 관리할 수 있게 해주는 `Process Manager`인데요 `pm2`의 `클러스터 모드`를 사용하여 무중단 배포를 구현할 수 있습니다.

해당 기능을 사용하기 위해선 프로젝트 root 경로에 `ecosystem.config.js` 파일을 생성해 주어야 합니다.

```js
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'NightCrows',
      exec_mode: 'cluster',
      instances: process.env.NODE_ENV === 'prod' ? 'max' : 1,
      script: './.output/server/index.mjs',
      env_alpha: {
        HOST: '0.0.0.0',
        PORT: 6141,
        NODE_ENV: 'alpha',
      },
      env_prod: {
        HOST: '0.0.0.0',
        PORT: 6141,
        NODE_ENV: 'prod',
      },
    },
  ],
}
```

`env_alpha`는 개발서버, `env_prod`는 상용서버에 대한 환경변수 블록입니다.

서버에는 글로벌 옵션으로 pm2를 설치해 주어야 합니다.

`sudo npm install -g pm2`

이제 `pm2`를 통해 서비스를 실행해 줍니다.


```json
// package.json
{
  ...
  "scripts": {
    ...
    "build:alpha": "nuxt build --dotenv=.env.alpha",
    "build:prod": "nuxt build --dotenv=.env.prod",
    "start:alpha": "NODE_ENV=alpha pm2 reload ecosystem.config.js --env alpha",
    "start:prod": "NODE_ENV=prod pm2 reload ecosystem.config.js --env prod"
  },
  ...
}

```

```
# 실행 순서
yarn # 모듈 설치
yarn build:alpha # 번들링
yarn start:alpha # 코드 실행
```