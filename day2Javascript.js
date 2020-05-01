// Day2

// Arrow Functions - ES6
// Arrays & objects(Master Object)
// Array Methods: Map, filter, findIndex, forEach, reduce
// Destructuring: (Array & Objects) [Spread & Rest operators]
// == vs === (Equality Checks)

//1. callbacks, Promises
const greet = msg => 'Hello' + msg;
// const addition = (a, b) => a + b; //syntax for Arrow Fun
const addition = (a, b) => { return (a + b); } //syntax for Arrow Fun
// console.log(addition(1,2));
// console.log(greet('World!!!'));
// this

function some() {
  // console.log(' this = ', this); // here this is Window object
  return 'text';
}
some();

// Arrays
let arrayItem = []; //empty Array
// console.log('array initial = ', arrayItem);
arrayItem.push(2);
arrayItem.push(3);
arrayItem.push(4);
// [2, 3, 4]
//  0  1  2 - index starts with 0
// console.log('array push = ', arrayItem);
arrayItem.pop(); // remove last item from Array
// [2, 3]
// console.log('array final = ', arrayItem);
// To find the length of the array just use .length property
// ex: [1,23, 4].length

let arrayToRemoveItem = [1, 2, 4, 5, 6, 8, 90];
// console.log('array = ', arrayToRemoveItem);
// Emptying the array 2 ways
// Length = 0 assign
// reassign with Empty array []
// arrayToRemoveItem = [];
// console.log(' Empty array = ', arrayToRemoveItem);

// Remove item at specific index
// use splice method 
// arrayToRemoveItem.splice(2, 1);
// console.log(' Remove 4 from array = ', arrayToRemoveItem);

// Get subarray from an Array using Slice
const subArray = arrayToRemoveItem.slice(4)
// console.log('subArray = ', subArray);
// console.log('array after removing subarray= ', arrayToRemoveItem);

// Array can have any type of items in it
const multiArr = [1, "abc", 12.3, true];
// console.log('multi data type arr = ', multiArr);

// ES6 new methods for Array
// Shift
// console.log('multiArr = ', multiArr);
// const firstItem = multiArr.shift();
// console.log('First item = ', firstItem);
//
multiArr.unshift('start')
// console.log('Add item at begin = ', multiArr);

// Objects : No duplicacy of keys. hence overrides the Values
let obj = {}; //empty object
// objects have key value pairs
// console.log('Empty obj = ', obj);
// Dot notation for adding a key value
obj.x = 1;
// console.log('obj with x as key = ', obj);
obj.x = "someother text";
obj.y = "someother text1";
obj.z = "someother text2";
// console.log('obj with x as key = ', obj);
// const y = 'keyName';
obj['y'] = 2;
// console.log('obj with y as key = ', obj);

// Array of Objects
let arrayOfObj = [
  {
    'type': 'fruit',
  },
  {
    'type': 'veggies',
  },
  {
    'type': 'flower',
  },
  {
    'type': 'essentials',
    name: 'xxxx yyyy',
  },
];

// Array Methods
// Map: it visits each item of array and performs some action and returns New Array.
const nums = [1, 2, 3, 4, 5];
const numMulBy2 = nums.map(item => item * 2);
// console.log('nums Mul by 2 = ', numMulBy2);
// console.log('Original array nums ', nums);
// const numMulBy2 = nums.map(function(item) {
//   return item * 2;
// });
const displayTypes = arrayOfObj.map((item, index) => item.type);
// console.log('Display Types = ', displayTypes);

// Filter
const evenNums = nums.filter(item => item % 2 == 0);
// console.log('even nums from array = ', evenNums);
const displayTypeswithFlower = arrayOfObj.map(item => item.type == 'flower');
// console.log('Types from array = ', displayTypeswithFlower);

// findIndex:  return the matched values index. // returns -1 if itsnot found
const indexNum = nums.findIndex(item => item == 4);
// console.log('index of 4 = ', indexNum);

// ForEach
const fruits = ['apple', 'mango', 'guava', 'pp'];
// fruits.forEach((item, index) => console.log('Fruit Name is ', item, 'at index ', index));

// Reduce
const sumOfNums = nums.reduce((a, b) => a + b);
// console.log(' sum of Nums = ', sumOfNums);

// Spread
// Its not creating a copy but its creating a reference
const arr1 = [10, 15];
const arr2 = arr1;
arr1.push(20);
// console.log('arr1 = ', arr1);
// console.log('arr2 = ', arr2);

// use Spread (...) to create a copy of Array
// 10, 15, 20
const arr3 = [...arr1];
arr3.push(40);
// console.log('arr3 = ', arr3);

// console.log('arr1 = ', arr1);
// console.log('arr2 = ', arr2);

// Spread operator in Objects
const names = {
  first: 'bob',
  last: 'harrison'
};

// console.log('First Name = ', names.first);

// const copyNames = names;
// copyNames.first = 'SAM';

// console.log('Copy Object Name = ', copyNames);
// console.log('Actual Object Name = ', names);

// using Spread to make a copy of your object. SHALLOW  copy. Not gonna do Deep copy
const copyObjUsingSpread = { ...names };
copyObjUsingSpread.first = 'John';

// console.log('Copy Obj Using Spread = ', copyObjUsingSpread);
// console.log('Actual Object Name = ', names);

// Rest Operator
// function getFullNames (fname, lname, title) {
//   return fname + lname + title;
// }
// console.log(getFullNames('John', 'dunkiry', 'Mr'));
// console.log(getFullNames('John', 'dunkiry', 'Mr', 'Dr', 'Phd', 'Bsc'));

// using Rest operator
function getFullNames(fname, lname, ...titles) {
  console.log('Titles = ', titles); // combines all Arguments 
  // return fname + lname + titles.join(' ');
  return fname + lname + titles[0];
}
// console.log(getFullNames('John', 'dunkiry', 'Mr', 'Dr', 'Phd', 'Bsc'));


// == compare the Values. === compare types using 'typeOf' + values
// console.log(5 == '5');
// console.log(5 === '5'); // strict eqality checks
// console.log(5 !== '5'); // strict eqality checks

// Nested Objects exmaple
const addressObj = {
  first: 'bob',
  last: 'harrison',
  address: {
    hno: 123,
    street: 'sainagar',
    city: 'hyd',
  }
};

// const copyAddressObj = {...addressObj}; // copy using spread operator: Shallow Cpy
// copyAddressObj.last = 'dacotha';

// console.log('copies Object = ', copyAddressObj);
// console.log('Original Object = ', addressObj);

// Change value of the nested key
// copyAddressObj.address.hno = 789;
// console.log('copies Object = ', copyAddressObj);
// console.log('Original Object = ', addressObj);

// Deep Copy/Clone of Objects
const deepClonedObj = JSON.parse(JSON.stringify(addressObj));
// console.log('Deep Cloned Obj = ', deepClonedObj);
deepClonedObj.address.hno = 789;
// console.log('Deep copies Object = ', deepClonedObj);
// console.log('Original Object = ', addressObj);