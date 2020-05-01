// Creating Class
class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullName = function() {
    return this.fname + ' ' + this.lname;
  }
}

// Inheritance of a Class to Another using 'extends' keyword
class Emplyee extends Person {
  constructor(id, salary, fname, lname) {
    super(fname, lname); // super keyword is used to execute the Parent constructir fucn
    this.id = id;
    this.salary = salary;
  }
  getYearlySalary = function() {
    return this.salary * 12;
  }
}
// creating a instance/object for a class
const emp1 = new Emplyee('sonal123', '2000', 'sonu', 'ojha');
emp1.getFullName(); 
console.log('emp1 = ', emp1, emp1.getFullName());

// Adding a New method through a 'prototype' such that it's available directly to All of its extended Classes as well
Emplyee.prototype.getFirstName = function() {
  return this.fname;
}
const emp2 = new Emplyee('Monu1234', '3000');
console.log(emp2.getYearlySalary(), emp1.getFirstName());

// Function as Object Constructors
function Person(name) {
  console.log('this in func =', this);
  this.name = name;
  this.getName = function() {
    return 'Hello' + this.name;
  }
}
let p1 = new Person('sonal');
const p2 = new Person('haily');

// p1.age = 42;// Error.Cannot add Properties/Methods through the instances. Need to add directly in 'Person'

console.log(p1.getName());
console.log(p2.getName());
console.log(p1 instanceof Person);
