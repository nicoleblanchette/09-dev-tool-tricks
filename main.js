const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');

const makeGreen = () => {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
};

// Regular
const regular = () => {
  console.log('hello');
};

// Interpolated
const interpolated = () => {
  console.log('hello i am a %s string!', 'silly');
};

// Styled
const styled = () => {
  console.log('%c i am some great text', 'font-family: "Comic Sans MS"; font-size: 44px');
};

// warning!
const warning = () => {
  console.warn('uh oh!!!');
};

// Error :|
const errorLog = () => {
  console.error('yikes! an error');
};

// Info
const info = () => {
  console.info('im tired...');
};

// Testing
const assert = () => {
  console.assert(1 === 1, 'wrong!!');
  console.assert(1 === 3, 'wrong!');
};

// clearing
const clear = () => {
  console.clear();
};

// Viewing DOM Elements
const viewDOM = () => {
  console.log(p);
  console.dir(p);
};

// Grouping together
const group = () => {
  dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
  });
};
// counting
const count = () => {
  console.count('nicole!!');
  console.count('nicole!!');
  console.count('nicole!!');
  console.count('nicole!!');
  console.count('nicole!!');
  console.count('nicole!!');
};

// timing
const timing = () => {
  console.time('fetching!!');
  fetch('https://api.github.com/users/nicoleblanchette')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching!!');
      console.log(data);
    });
};

const table = () => {
  console.table(dogs);
};

const main = () => {
  p.addEventListener('click', makeGreen);
  regular();
  interpolated();
  styled();
  warning();
  errorLog();
  info();
  assert();
  viewDOM();
  group();
  count();
  timing();
  table();
};

main();