// 1
function foo() {
  var bar, baz, bam;
  bar = 2;
  if (bar > 1 || bam) {
    baz = bar * 10;
  }
  bam = (baz * 2) + 2;
  console.log(bam);
}

foo();

// 2
// NOTE: if a variable is declared with no keyword then it would consider 'var' for it.
function fooz() {
  a = 1;
  if (a) {
    var a;
    let b = a + 2;

    console.log(b);
  }
  console.log(a);
  console.log(b);
}
fooz();

// 3
function bar() {
  var a = 10;
  if (a > 2) {
    let b = a * 3;
    console.log(b);
  }
  if (a > 5) {
    let c = a / 2;
    console.log(c);
  }
  console.log(a);
}
bar();

// 4
function buzz() {
  let a = b = 0;
  a++;
  console.log('a Inside the function === ', a);
  return a;
}
buzz();
// console.log(typeof a);
// console.log(typeof b);
// console.log('a outside the function = ', a);
// console.log('b = ', b);

// 5
const clothes = ['skirt', 'shirt'];
clothes.length = 0;
const x = clothes[0];
// What is x here ?
// console.log('x = ', x);

// 6
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++); {
  numbers.push(i + 1);
}
// console.log('numbers = ', numbers);

// 7
function arrayFromValue(item) {
  return
  [item];
}
arrayFromValue(10);

// 8 : Closure Example
function scoop() {
  let i;
  for (i = 0; i < 3; i++) {
    const log = () => {
      console.log(i);
    }
    setTimeout(log, 100);
  }
}
// what's the output of the function
// scoop(); 

// 9: Closure Example
const myGlobal = 0;
function func() {
  const myVar = 1;
  console.log(myGlobal);

  function innerOfFunc() {
    const myInnerVar = 2;
    console.log(myVar, myGlobal);

    function innerOfInnerOfFunc() {
      console.log(myInnerVar, myVar, myGlobal);
    }

    innerOfInnerOfFunc();
  }

  innerOfFunc();
}
// func();

// 10: Closure Example
function outerFunc() {
  let outerVar = 'I am outside!';
  function innerFunc() {
    console.log(outerVar);
  }
  return innerFunc;
}
const myInnerFunc = outerFunc();
// myInnerFunc();

// 11
function multiply(a) {
  return function executeMultiply(b) {
    return a * b;
  }
}
const double = multiply(2);
// double(3);

// 12
function foo(n) {
  var f = (...args) => args[0] + n;
  return f(10); 
}
foo(1);

//13
const obc = {
  x: 2,
  // In fun Exp's: 'this' is bind to where it is declared
  f1: function() {
    console.log('this in f1 =', this);
    return;
  },
  // Arrow fun do not have their own 'this'
  f2: () => {
    console.log('this in f2... =', this);
    return;
  }
}
// obc.f1();
// obc.f2();