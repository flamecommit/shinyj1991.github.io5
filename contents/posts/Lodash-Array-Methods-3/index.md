---
title: "Lodash Array Methods 3"
description:
date: 2022-09-26
update: 2022-09-26
tags:
  - Javascript
  - Lodash
series: "Lodash Array Methods"
---

## _.findIndex

조건에 맞는 첫번째 요소의 index를 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [predicate=_.identity] (Function): 반복마다 호출되는 함수<br>
\- [fromIndex=0] (number): 검색할 인덱스

***Returns***<br>
\- (number): 찾은 요소의 인덱스, 없을 경우 -1


```js
var users = [
  {user: 'barney', active: false},
  {user: 'fred', active: false},
  {user: 'pebbles', active: true}
];
 
_.findIndex(users, function(o) {return o.user == 'barney';});
// => 0
 
// The `_.matches` iteratee shorthand.
_.findIndex(users, {user: 'fred', active: false});
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```

## _.findLastIndex

`_.findIndex` 와 비슷하지만 이 메서드는 요소를 오른쪽에서 왼쪽으로 찾습니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [predicate=_.identity] (Function): 반복마다 호출되는 함수<br>
\- [fromIndex=array.length-1] (number): 검색할 인덱스

***Returns***<br>
\- (number): 찾은 요소의 인덱스, 없을 경우 -1

```js
var users = [
  {user: barney, active: true},
  {user: fred, active: false},
  {user: pebbles, active: false}
];
 
_.findLastIndex(users, function(o) {return o.user == 'pebbles';});
// => 2
 
// The `_.matches` iteratee shorthand.
_.findLastIndex(users, {user: 'barney', active: true });
// => 0
 
// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2
 
// The `_.property` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0
```

## _.flatten

2차원 배열을 1차원 배열로 평평하게 변환합니다.

***Arguments***<br>
\- array (Array): 대상 배열

***Returns***<br>
\- (Array): 결과 배열

```js
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

## _.flattenDeep

다차원 배열을 반복적으로 평평하게 변환합니다.

***Arguments***<br>
\- array (Array): 대상 배열

***Returns***<br>
\- (Array): 결과 배열

```js
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```

## _.flattenDepth

다차원 배열을 재귀 깊이 만큼 평평하게 변환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [depth=1] (number): 재귀 깊이

***Returns***<br>
\- (Array): 결과 배열

```js
var array = [1, [2, [3, [4]], 5]];
 
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
```