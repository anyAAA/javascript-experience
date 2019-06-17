var a = true;
var b = false;
var result = !b;
console.log(result);


var a = 2;
var b = 3;
var c = true;
var d = false;

var result = a + b * a++ - b++/ a * 2 - b;
// 2 + 3 * 2 - 3 / 3 * 2 - 4
// a = 3;

// var result = a > b && c < b + a;

// var result = ++a * a + b++ * b - a + b / a + b - a++;
// 3    * 3 + 4   * 4 - 3 + 4 /2 +4 - 4
//     9+16-3+2

var result = ++a * a + b++ * b - a + b / 2 + b - a++;
// 2 * 2 + 3 * 3  -3 +4/2+4-4 
// 2 * 2 + 3 * 4-3 +4/2+4-4 
// a = 3;
// b = 4;

// 2 * 2 + 4 * 4 - 3 + 4 / 2 + 4 - 4

// 4 + 16 - 3 + 4 / 2 + 4 - 3++
// a = 3

console.log(result);