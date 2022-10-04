---
title: "Lodash Array Methods 5"
description:
date: 2022-10-04
update: 2022-10-04
tags:
  - Javascript
  - Lodash
series: "Lodash Array Methods"
---

## _.nth

배열의 인덱스 n에 있는 요소를 가져옵니다. n이 음수라면 끝에서 부터 n번째 요소를 가져옵니다.

***Arguments***<br>
\- array (Array): 대상 배열

***Returns***<br>
\- [n=0] (number): 반환할 요소의 인덱스


```js
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';
```

## _.pull

배열에서 지정된 모든 값을 제거합니다.

참고 : `_.without`과 달리 이 메서드는 배열을 변경합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [values] (...*): 제거할 값

***Returns***<br>
\- (Array): 반환 배열

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```

## _.pullAll

제거할 값에 배열을 수락한다는 점을 제외하고 `_.pull` 과 같습니다.

참고 : `_.difference` 와 달리 이 메서드는 배열을 변경합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- values (Array): 제거할 값

***Returns***<br>
\- (Array): 반환 배열

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
```

## _.pullAllBy

배열 및 값의 각 요소에 대해 호출되는 반복을 하용하여 비교 기준을 생성한다는 점을 제외하면 `_.pullAll` 과 같습니다. 반복자는 하나의 인수(값)로 호출됩니다.

참고 : `_.differenceBy` 와 달리 이 메서드는 배열을 변경합니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- values (Array): 제거할 값<br>
\- [iteratee=_.identity] (Function): 반복마다 호출되는 비교 함수

***Returns***<br>
\- (Array): 반환 배열

```js
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
```


## _.remove

술어를 사용하는 모든 요소를 배열에서 제거하고 제거된 요소의 배열을 반환합니다. 술어는(값, 인덱스, 배열)의 세 가지 인수로 호출됩니다.

참고 : `_.filter` 와 달리 이 메서드는 배열을 변환합니다. `_.pull` 을 사용하여 값을 기준으로 배열에서 요소를 가져옵니다.

***Arguments***<br>
\- array (Array): 대상 배열<br>
\- [iteratee=_.identity] (Function): 반복마다 호출되는 함수

***Returns***<br>
\- (Array): 제거된 요소들의 새 배열

```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
```

## _.reverse

배열의 요소들을 반전시킵니다.

***Arguments***<br>
\- array (Array): 대상 배열

***Returns***<br>
\- (Array): 결과 배열

```js
var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]
```