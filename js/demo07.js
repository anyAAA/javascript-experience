// 算数运算符
var a = 1;
var b = 2;
var c = 1 + 2;
var d = a * b; //2
var e = d * b; //4
var f = e / d; //2
var g = e % d; //2
/*console.log(c);
console.log(a + b);
console.log(d);
// 目前是4块空间 
console.log(e);
console.log(f);
console.log(g);
console.log(g % f);*/

var e = 2;
e++;
e++;
// var k = e++;
var k = ++e; //此时 k=5 e=5
e--;
// console.log(e++);
console.log(e);
console.log(k);