// 배열 해체 할당 --------------------------------------------------
var a, b, rest, c;
[a, b, c = 30] = [10, 20]; // c=30 은 default parameter
console.log(a); // 10
console.log(b); // 20
console.log(c);

[a, b, ...rest] = [10, 20, 30, 40, 50]; // 여기서 ...는 나머지 연산자
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
