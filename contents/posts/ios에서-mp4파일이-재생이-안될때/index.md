---
title: "Nuxt3 Service 배포 삽질 기록"
description:
date: 2022-12-22
update: 2022-12-22
tags:
  - nuxt
  - nuxt3
  - deploy
# series: ""
---

회사에서 새로 런칭하는 게임의 티저 성격의 단일 페이지 웹을 제작하게 되었는데요

얼마전 정식 릴리즈된 Nuxt3를 사용하면서 겪었던 시행착오를 정리해 보았습니다.

기존에 사용하던 Nuxt2 과 사용방법이 여기저기 변화했지만 공식문서에 정리가 잘 되어있어 작업자체는 크게 어렵지 않았습니다.

기억나는 변경사항으로는 `nuxt.config.js` 파일의 옵션에서 `modules`와 `buildModules`가 `modules`로 통합되었다는 것과

`plugins` 디렉토리에 있는 `js` 또는 `ts` 파일을 `nuxt.config.js` 에서 호출하지 않아도 자동으로 실행해주는 것이었습니다.

전체적으로 Nuxt2 보다 확실히 개발 편의성이 높아졌다고 생각합니다.

여차저차 공식문서와 구글링을 통해 개발을 마무리 하고 배포 단계에 도달했습니다.

Nuxt의 번들링은 `build` 와 `generate` 두 종류가 있는데요

`build`는 ssr 을 포함한 정규 빌드 방식이고 `generate` 는 정적 웹사이트라고 보시면 됩니다.

제가 이번에 투입된 프로젝트는 별도의 http 통신이 없는 단순 정보제공 성격의 티저사이트 이기 때문에 `generate` 로 배포하기로 결정했습니다.

하지만 generate로 만들어진 결과물 사이트를 서버에 배포해 보니 개발환경과 미세한 차이점들이 발생했습니다. (error 페이지 렌더링 등등)

아마 모든 프레임워크가 그렇듯 Nuxt3도 처음 릴리즈(현재 버전 3.0.0)된 버전이기 때문에 이런 오류가 발생하는건 어쩔수 없다고 생각합니다. (이래서 프레임워크는 검증기간을 거친 후 실제서비스에 적용해야 합니다.)

그래서 정적웹사이트에서 정규 빌드 후 서버에서 실행시키는 방향으로 배포방식을 변경하기로 마음먹었습니다.

Nuxt3에서는 작업물을 `build` 한 다음에 `node .output/server/index.mjs` 명령어를 통해 실행시켜야 합니다.

하지만 이렇게 실행하게 되면 추후 사이트를 수정할 일이 생겨 작업 후 재배포 했을때, 배포하는 동안 서비스가 내려가는 문제가 발생합니다.

이를 방지하기 위해서 사용하는 모듈이 바로 `pm2`의 클러스터 모드입니다.

`pm2`를 사용하기 위해선 프로젝트 root 경로에 `ecosystem.config.js` 파일을 생성해 주어야 하고

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
    },
  ],
}
```

서버에는 글로벌 옵션으로 pm2를 설치해 주어야 합니다.

`sudo npm install -g pm2`

이후의 작업은 다음에 다시 정리하도록 하겠습니다.