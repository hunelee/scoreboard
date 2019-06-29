// 객체 해체 할당 --------------------------------------------------
({ c = 30, b, a } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}