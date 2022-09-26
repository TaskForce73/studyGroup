const a =  +prompt('Enter your number');

const b = +prompt('Second number');

const c = +prompt('Third number');

// console.log(a * 2);
// console.log(-b);
// console.log(b * b - 4 * a * c);

function Result (a, b, c) {
const x1 = ( -b + Math.sqrt(b **2 - 4 * a * c) ) / 2 * a;
const x2 = ( -b - Math.sqrt(b **2 - 4 * a * c) ) / 2 * a;
return x1, x2;
}

console.log(Result(a, b, c));