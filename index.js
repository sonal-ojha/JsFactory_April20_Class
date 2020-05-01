// Js Concepts - Day1

// window - global object
// console statements
'use strict'

// Data types in JS
// Function declaration, function expression and (Hoisting)
// IIFE
// Difference btw let, const and Var
// Pure Functions

// console.log('My Js file..');
// console.warn('warning text');

// int name = "bnmbm"
// Js determined the type of variable in runtime
// Datatypes: Boolean, String, Number, Null, undefined, Symbol. (object & Function)
// boolean is True/false
var isApril = true; // false
var name = "jsFactory";
var hno = 124; // decimals also accepted in this case.
var ppno = 12.566;

// console.log('isApril type = ', typeof(isApril));
// console.log('Name type = ', typeof(name));
// console.log('Hno type = ', typeof(hno));
// console.log('ppno type = ', typeof(ppno));

// Null is Not Empty, Not Undefined
var mynum = undefined;
// console.log('mynum = ', typeof(mynum));
// You get Refernce error when you use a variable that is not Declared

var address = null;
// Typeof Null is object in Js
// console.log('Type of Adfress that is given as null value = ', typeof(address));

// Function is Js. 2 types.
// 1.Function Declaration: use the functions before the declarion
function displayName(fname, lname) {
  return fname + ' ' + lname;
}
displayName('Sonal', 'ojha');
// console.log(displayName('Sonal', 'ojha'));

// 2. Function Expression

// console.log('Full Name is ', displayName1('sonal', 'ojha')); // Hoisting does not take place here for function Exp..
var displayName1 = function(fname, lname) {
  return fname + ' ' + lname;
}
// console.log('displayName1 = ', displayName1);
// console.log('Full Name is ', displayName1('sonal', 'ojha'));

// Hoisting: the declarions are all moved to the top section of file
function MathX() {
  console.log(' the value of z = ', z);
  var x = 10;
  var add1 = x + 1;
  console.log(' x = ', x);
  console.log(' add1 = ', add1);
  var z = 20;
}

// The code performs Hoisting as below
// var x, y, z; (It does declaration/ but not instantiation)
// x = 10;
// add1 = x + 1;
// console.log(...)
// console.log(...)
// z = 20;

// MathX();

// IIFE = Immediate invoked function expression - you need not have a Function Call
// (function() {
//   return console.log('hello...');
// })();

// Declaration Types: used for Scoping variables
// var: Function level
var add = 'addtion';

// let: Block level scoping
let sub = 'subtract';
// const: Constant. No overriding of the value
const pi = 3.14;

function AreaRect() {
  var length = 10;
  var breadth = 20;
  console.log('length = ', length);
  console.log('breadth = ', breadth);
  if (length < breadth) {
    let data = true;
    length = 30;
    console.log('New length = ', length);
    console.log(' The breadth is greater than the Length', data);
  }
  // console.log(' using data outside the Block = ', data); // Gives undefined Error as Data is declared in block scope
  return length * breadth;
}
// const result = AreaRect();
// console.log('result of Area Rext is =', result);
// Hoisting takes place for variables declared using 'var' keyword. but not with 'let';

// Pure Function: you do not alter the Input, you get the same output for the same input given at point of time
function addSalutaion (name, gender) {
  if (gender == 'female') {
    let newName = 'Mrs.' + name;
    console.log('input given name = ', name);
    return newName;
  }
  return 'Mr.'+ name + gender;
}

const name1 = addSalutaion('Roy', 'male');
const name2 = addSalutaion('Srijita', 'female');
console.log('name of Roy = ', name1);
console.log('name of Srijita = ', name2);
