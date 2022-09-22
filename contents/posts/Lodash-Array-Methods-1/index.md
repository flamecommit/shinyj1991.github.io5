---
title: "Lodash Array Methods 1"
description:
date: 2022-09-22
update: 2022-09-22
tags:
  - Javascript
  - Lodash
series: "Lodash Array Methods"
---

## _.chunk

매개변수 길이만큼 그룹으로 분할된 배열을 만듭니다.<br>
배열을 균등하게 분할할 수 없는 경우 남은 요소들로 마지막 배열을 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [size=1] (number): 분할 길이

***Returns***<br>
\- (Array): 분할된 배열


```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

## _.compact

잘못된 값이 모두 제거된 배열을 반환합니다.<br>
`false`, `null`, `0`, `""`, `undefined` 그리고 `NaN`은 제거됩니다.

***Arguments***<br>
\- array (Array): 대상 배열

***Returns***<br>
\- (Array): 필터링 된 값의 새 배열

```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

## _.concat

대상 배열에 배열 또는 값을 연결하여 새 배열을 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [values] (...*): 연결할 배열 또는 값

***Returns***<br>
\- (Array): 연결된 새 배열

```js
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```

## _.difference

두 배열을 받아 동일성 비교를 하여 앞의 배열에서 뒤의 배열과 다른 요소들을 모아 새 배열을 반환합니다. 결과값의 순서 및 참조는 제1 배열에 의해 결정됩니다.

참고 : `_.pullAll`과 달리 이 메서드는 새 배열을 반환합니다.

***Arguments***<br>
\- array (Array): 검사할 배열<br>
\- [values] (...Array): 제외할 배열

***Returns***<br>
\- (Array): 필터링 된 값의 새 배열

```js
_.difference([2, 1], [2, 3]);
// => [1]
```

## _.differenceBy

difference에서 추가로 대상 배열의 순회 함수를 인자로 받는다.<br>
대상 배열들은 함수에 의해 한번 순회를 거친후 비교된다.

***Arguments***<br>
\- array (Array): 검사할 배열<br>
\- [values] (...Array): 제외할 배열<br>
\- [comparator] (Function): 순회 함수

***Returns***<br>
\- (Array): 필터링 된 값의 새 배열

```js
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => 1.2
```

```js
const members = [
  {id: 1, name: '김철수',},
  {id: 2, name: '박철수',},
  {id: 3, name: '이철수',}
];

_.differenceBy(members, [
  {id: 1, name: '김봉남'},
  {id: 4, name: '이철수'}
], member => member.id);

/* => [
  {id: 2, name: '박철수',},
  {id: 3, name: '이철수',}
] */
```

## _.differenceWith

difference에서 추가로 대상 배열의 비교 함수를 인자로 받는다.<br>
비교 함수로 대상 배열들의 동일성 여부를 판별한다.

***Arguments***<br>
\- array (Array): 검사할 배열<br>
\- [values] (...Array): 제외할 배열<br>
\- [comparator] (Function): 비교 함수

***Returns***<br>
\- (Array): 필터링 된 값의 새 배열

```js
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => 1.2
```

```js
const members = [
  {id: 1, name: '김철수',},
  {id: 2, name: '박철수',},
  {id: 3, name: '이철수',}
];

_.differenceWith(members, [
  {id: 1, name: '김봉남'},
  {id: 4, name: '이철수'}
], (a, b) => a.name === b.name);

/* => [
  {id: 1, name: '김철수',},
  {id: 2, name: '박철수',}
] */
```
