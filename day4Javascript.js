const URL = 'https://swapi.dev/api/people/';
const URLError = 'https://swapi.dev/api/peoplevvvv/';
const URL1 = 'https://swapi.dev/api/people/1/';

// Template Literals
// Object literals in Arrow Functions
// Promises
// Fetch
// Async, Await

const name = 'Sonal';
const x = `my name is ${name}.`;
// console.log('Template lietral = ', x);

function getName(type) {
  const data = "the browser is loading";
  return `${data} ${type}`;
}
// console.log(getName('fast'));

// Object Literals
const af = () => 1;
// const af = () => {
//   const obj = {};
//   obj.name = 'abc';
//   return obj;
// };

const func = () => ({ name: 'abc', age: 23 });
const obj = func();
// console.log('Retured obj from Arrow fun = ', obj);

// Promises
const p1 = new Promise(function (resolve, reject) {
  // resolve('data is fullfilled');
  // reject('Error has occurred!!')
})
// console.log('p1 = ', p1);
// p1.then(data => console.log('data = ', data))



// console.log('First');
let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 3000);
});
// console.log('Second');
// promise.then(alert);
// console.log('Third');

// fetch: used to fetch Data from API
function fetchStarWardsData() {
  const allPersonDetails = fetch(URL)
    .then(response => response.json())
    .then(finalData => finalData.results);
  console.log('allPersonDetails = ', allPersonDetails);
  allPersonDetails.then(promiseVal => promiseVal.map(item => console.log(item.name)));
  // .then(finalData => finalData.results.map((person, index) => console.log(index, 'name is = ', person.name)))
}
// fetchStarWardsData();

// handle Errors using Fetch
function getDataForStw() {
  fetch(URLError)
    .then(res => res.json())
    .then(res => console.log('Success ...', res))
    .catch(error => console.log('Error occurred..', error))
};
// getDataForStw();

// Chain multiple Fetch
function fetchStarWardsDataWithPersonFilm() {
  const allPersonDetails = fetch(URL)
    .then(response => response.json())
    .then(finalData => finalData.results);
  allPersonDetails.then(promiseVal => {
    promiseVal.map(item => console.log(item.name))
    const person1FilmURL = promiseVal[0].films[0];
    console.log('person 1 films =', person1FilmURL);
    fetch(person1FilmURL)
    .then(res => res.json())
    .then(filmData => console.log('Film Data = ', filmData))
    .catch(err => console.log('Erron in Person 1 Film data fetch..'))
  }
  );
}
// fetchStarWardsDataWithPersonFilm();

// Async&Await
async function getData() {
  let result;
  try {
    console.log('Before Fetch line..');
    result = await fetch(URL).then(res => res.json()).then(data => {
      console.log('Data = ', data);
      var strHTML = "";
      data.results.map(item => {
        strHTML += `<div className="">
          <h4>${item.name}</h4>
        </div>`;
      });
      document.getElementById("data").innerHTML = strHTML; // dynamic level to assign HTML content
    })
    console.log('After Fetch line..');
  } catch (e) {
    console.log('err..');
  }
  return result;
}
// getData();

// number = num / 0; => try block

// throw new Error('dfghj');

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = new Promise(resolve => resolve(4)); // constructor format

const allPromisesInAsync = Promise.all([promise1, promise2, promise3, promise4]).then(
  dataForAllPromises => console.log('Array resolved = ', dataForAllPromises)
).catch(err => console.log('rejected in some Promsise'))
console.log('allPromisesInAsync = ', allPromisesInAsync);

// Task To Do : https://restcountries.eu/rest/v2/all
// display All countries with the name and Flag with Currency details