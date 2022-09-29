---
title: "Lodash Array Methods 4"
description:
date: 2022-09-29
update: 2022-09-29
tags:
  - Javascript
  - Lodash
series: "Lodash Array Methods"
---

## _.fromPairs

키-값 쌍으로 구성된 객체를 반환합니다.

***Arguments***<br>
\- pairs (Array): The key-value pairs.

***Returns***<br>
\- (Object): Returns the new object.


```js
_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```

## _.head

배열의 첫 번째 요소를 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열

***Returns***<br>
\- (Object): 대상 배열의 첫 번째 요소

```js
_.head([1, 2, 3]);
// => 1
 
_.head([]);
// => undefined
```

## _.indexOf

배열에서 동일성 비교 후 첫번째 요소의 인덱스를 가져오고 동일값이 없을 경우 -1을 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- value (*): 검색 값<br>
\- [fromIndex=0] (number): 검색 시작 위치

***Returns***<br>
\- (Object): 일치하는 값의 인덱스, 없을 경우 -1

```js
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```

## _.initial

배열의 마지막 요소를 제외한 모든 요소를 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열

***Returns***<br>
\- (Object): 결과 배열

```js
_.initial([1, 2, 3]);
// => [1, 2]
```

## _.join

배열의 모든 요소를 구분자로 구분된 문자열로 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [separator=','] (string): 구분자

***Returns***<br>
\- (Object): 결과 문자열

```js
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

## _.last

배열의 마지막 요소를 반환합니다.

***Arguments***<br>
\- array (Array): 대상 배열

***Returns***<br>
\- (Object): 대상 배열의 마지막 요소

```js
_.last([1, 2, 3]);
// => 3
```

## _.lastIndexOf

마지막 요소부터 비교한다는것을 제외하면 `_.indexOf` 와 동일합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- value (*): 검색 값<br>
\- [fromIndex=array.length-1] (number): 검색 시작 위치

***Returns***<br>
\- (Object): 일치하는 값의 인덱스, 없을 경우 -1

```js
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```