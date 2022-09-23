---
title: "Lodash Array Methods 2"
description:
date: 2022-09-23
update: 2022-09-23
tags:
  - Javascript
  - Lodash
series: "Lodash Array Methods"
---

## _.drop

앞에서 부터 n개의 요소를 제거한 새 배열을 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [n=1] (number): 삭제할 요소 수

***Returns***<br>
\- (Array): 결과 배열


```js
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

## _.dropRight

끝에서 부터 n개의 요소를 제거한 새 배열을 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [n=1] (number): 삭제할 요소 수

***Returns***<br>
\- (Array): 결과 배열

```js
_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

## _.dropRightWhile

끝에서 부터 술어가 false를 반환할 때까지 순환하면서 요소들을 삭제한 후 결과 배열을 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [predicate=identity] (Funtion): 반복마다 호출되는 함수

***Returns***<br>
\- (Array): 결과 배열

```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.dropRightWhile(users, function(o) { return !o.active; });
// => objects for ['barney']
 
// The `_.matches` iteratee shorthand.
_.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['barney', 'fred']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropRightWhile(users, ['active', false]);
// => objects for ['barney']
 
// The `_.property` iteratee shorthand.
_.dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```

## _.dropWhile

앞에서 부터 술어가 false를 반환할 때까지 순환하면서 요소들을 삭제한 후 결과 배열을 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [predicate=identity] (Funtion): 반복마다 호출되는 함수

***Returns***<br>
\- (Array): 결과 배열

```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
 
// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
 
// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```

## _.fill

배열 요소를 시작부터 끝까지 값을 채웁니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- value (*): 배열을 채울 요소<br>
\- [start=0] (number): 시작 위치<br>
\- [end=array.length] (number): 종료 위치

***Returns***<br>
\- (Array): 결과 배열

```js
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```