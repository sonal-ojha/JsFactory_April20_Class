// setTimeOut, setInterval, clearInterval
// Closures:- closure is a function that remembers the variables from the place where it is defined, regardless of where it is executed later.
// EventLoop
// example for 'this'
// Object Constructors using Function
// Call, Apply, Bind
// Class & instance creation
// Event propagation - bubbling, capture and target

//* * * NOTE: The below point applies for both setTimeOut & setInterval
// first Argument 'Function' can be either Arrow fun/Function exp'n

// setTimeout(function, TimeCount = 1000) // syntax
// The first Argument 'Function' is executed AFTER the TimeCount
// setTimeout(function() {
//   console.log('After 1 sec...');
// }, 5000);
// setTimeout(() => console.log('Arrow fun...'), 2000);

// setInterval: The first Argument 'Function' is executed for Every TimeCount in Intervals
// setInterval(() => {
//   console.log('setInterval ...')
// }, 2000);

// Example
// const timerID = setInterval(() => alert('Helloo...'), 1000);
// setTimeout(() => {
//   clearInterval(timerID);
//   alert('Close...');
// }, 5000);


function outer() {
  var fname = 'John';
  console.log('Outer Fun = fname = ', fname);
  const inner = function () {
    console.log('Accessing Outer fun value of fname in Inner fun = ', fname);
    var lname = 'Keneddy';
    console.log('Inner Fun = lname = ', lname);
    return fname + ' ' + lname;
  }
  // console.log('lname in Outer fun =', lname); // will not work...
  return inner;
}
// const outerVal = outer();
// console.log('value of Inner Fun = ', outerVal);
// {
//   console.log('Accessing Outer fun value of fname in Inner fun = ', fname);
//   var lname = 'Keneddy';
//   console.log('Inner Fun = lname = ', lname);
//   return fname + ' ' + lname;
// }
// const result = outerVal();
// console.log('Result == ', result);

// Event Loop Example

function foo() {
  console.log('1.Foo  here...');
  function baz() {
    setTimeout(() => console.log('2.Baz  here...'), 3000);
  }
  baz();
  function bar() {
    console.log('3.Bar  here...');
  }
  bar();
  console.log('End of Func...');
}
// foo();

// this
const user = {
  type: 'premium',
  getID: function() {
    console.log('this in Func Expn =', this.type); // this is the obj 'user'
  },
  getUserAge: () => { // Arrow func do not have their own This
    console.log('this in Arrow =', this.type); // undefined
  }
}
// console.log(user.getID())
// console.log(user.getUserAge())

// function add() {
//   console.log('this in Add = ', this); // this is Window object
// }
// add();

// Object Constructors
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log('this in Constructor = ', this);
//   // return this; // default return statement is available through func constructors
// }
// const p1 = new Person('sonal', 25);
// const p2 = new Person('hentry', 26);
// console.log('object1 of Person = ', p1);
// console.log('object2 of Person = ', p2);

const data = {
  user: 'std',
  id: '4567erfvbj',
  name: 'Serty',
};

// function getUserName(lname, t1, t2) { // ...rest operators
//   return this.name + ' ' + lname + ' ' + t1 + t2;
// }
// getUserName(); // undefined
// call method
// const usingCall = getUserName.call(data, 'roy', 'Mr.', 'Dr.')
// console.log('using call result = ', usingCall);

// call vs apply 
// second param is array in the Apply method
function getUserName(...args) { // ...spread operators
  // display all Aruments
  console.log('Arguments from Apply = ', args);
  // use Array methods like map, forEach... to display them if you need it.
  return this.name;
}
// const usingApply = getUserName.apply(data, ['roy', 'Mr.', 'Dr.'])
// console.log('using Apply result = ', usingApply);

// Bind
var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  }
}
const carData = car.displayDetails;
// console.log('CarData = ', carData);
// function () {
//   console.log(this.registrationNumber + " " + this.brand);
// }
const boundedCarFun = carData.bind(car);
// console.log('boundedCar Fun... = ', boundedCarFun);
// boundedCarFun();

// Classes in Js
class Person {
  // constructor : initialization
  constructor(first, last) {
    this.fname = first;
    this.lname = last;
  }
  // methods
  getFirstName() {
    return this.fname;
  }
  getFullName() {
    return this.fname + ' ' + this.lname;
  }
}

// create instances/obj using Classes
const p1 = new Person('Rizvi', 'Roy');
console.log('Instance p1 =', p1);
const p2 = new Person('Leela', 'Raj');
console.log('Instance p2 =', p2);

const firstNameP1 = p1.getFirstName();
console.log('first Name P1 object = ', firstNameP1);

const fullNameP2 = p2.getFullName();
console.log('Full Name P2 object = ', fullNameP2);

// instaceOf
console.log('p2 is instance of Person = ', p2 instanceof Person)