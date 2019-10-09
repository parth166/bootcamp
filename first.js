
// var foo;

// console.log(typeof(foo));

// var flag = true;
// console.log(typeof(flag));

// var input_by_user = 12;

// console.log(typeof(12));

// if (typeof(input_by_user) == 'number')
//   console.log('Validation done');
// else
//   console.log('failed');


// greet = name => "Hello " + name;

// console.log(greet('parth'));

// var arrowFunc = () => {
//   console.log('hello from an arrow function');
// }

// syntax shortcuts
// one parameter (no parentheses)
// single-line return (no explicit `return` keyword)

// (createLogInfo = info => console.log(info + 'info'))('parth');

// they can be anonymous functions!
// (() => console.log('I am an anonymous arrow function'))();

// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// function func(person) {
//   person.firstName = 'parth';  
// }

// func(person);
// console.log(person.fullName());


// *** Example 1 ***

// function logMessage() {
//   console.log('greetings');
// }

// function printMessages(callback) {
//   callback();
// }

// // logMessage becomes a callbck
// printMessages(logMessage);

// // *** Example 2 ***

// var numbers = [1, 3, 5, 7, 9];

// function logNumber(number) {
//   console.log('number', number);
// }

// // Passing in a callback to an out-of-the box function
// numbers.forEach(logNumber);

// // a custom version of forEach
// function forEach(array, callback) {
//   for (var index=0; index<array.length; index++) {
//     var item = array[index];

//     callback(item);
//   }
// }

// forEach(numbers, number => console.log('number', number));


// write functions `logMessage` and `greet`
// such that the following line logs 'hi'

// logMessage = (str) => {console.log(str)};

// greet = (callback) => {
//   return callback();
// };

// logMessage(greet(() => greet(() => 'hi')));

// var aang = {
//   element: 'air',
//   greet: function() {
//     console.log(
//       "Hi! I'm Aang. I can do cool things with",
//       this.element
//     );

//     (function () {
//       console.log(
//         'I can make a ball with',
//         this.element
//       );

//        // logs 'I can make a ball with undefined'
//       //  The function has to be a method (attached to the owner object)
//       //  in order for `this` to represent the owner object

//       console.log('this', this); // logs the global object (Window, in the browser)
//     })();
//   }
// };

// aang.boast = function () {
//   console.log(
//     'I can make a ball with',
//     this.element
//   );

//   // logs 'I can make a ball with air'
//   // this boast function is now a member of the aang object

//   console.log('this', this); // logs the `aang` object
// };

// aang.greet();
// aang.boast();

// var coder = {
//   username: 'joe',
//   years: 3,
//   logStatus: () => {
//     // An arrow function does not create a `this` object
//     // this = Window object
//     console.log('working from office');
//   },
//   logProfile: function() {
//     // A function expression creates a `this` object
//     // this = owner object
//     console.log('username:', this.username);
//     console.log('years coding:', this.years);
//   }
// };

// coder.logProfile();

// var store = {};
// store.test = 'foo';
// console.log(store.test); // 'foo' (therefore, object)

// var jobs = [];
// jobs.test = 'foo';
// console.log(jobs.test); // 'foo' (therefore, object)

// var log = function() {};
// log.test = 'foo';
// console.log(log.test); // 'foo' (therefore, object)

// var total = 1;
// total.test = 'foo';
// console.log(total.test); // undefined (therefore, not object)

// var greeting = 'hello';
// greeting.test = 'foo';
// console.log(greeting.test); // undefined (therefore, not object)

// console.log(Date());

// let tiger = {
//   name : 'parth',
//   age : 21,
//   location : 'bangalore',
// };

// console.log(tiger.location);

// tiger.location = 'chandigarh';

// console.log(tiger.location);

// function changeLocation() {
//   tiger.location = 'chd';
//   console.log(tiger.location);
// }

// changeLocation();
// console.log(tiger.location);

// -----------------

// console.log(typeof([1,2,3]));

// is_array = (arr) => {
//   return Array.isArray(arr);
// };

// console.log(is_array('w3resource')); 
// console.log(is_array([1, 2, 4, 0]));

// var array1 = [1, 2, 4, 0];
// var array2 = [1, 2, [4, 0]];

// console.log(array_Clone(array1)); 
// console.log(array_Clone(array2));

// function array_Clone(arg) {
//   return cloneArray = {...arg}; 
// }

// changeArray = () => {
//   array1[3] = 'hi';
//   array2[2][1] = 'hi';
// };

// changeArray();

// console.log(array1);
// console.log(array2);

// first = (arr, n = 0) => {
//   var ans = [];
//   if (arr.length == 0)
//     return ans;
//   else if (n == 0)
//     return arr[0];
//   if (n > arr.length)
//     return arr;
//   for (let i = 0 ; i < n; i++) {
//     ans.push(arr[i]);
//   }
//   return ans;
// };

// console.log(first([7, 9, 0, -2])); 
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// last = (arr, n = 0) => {
//   if (n < 0 || arr.length == 0)
//     return [];
//   else if (n == 0)
//     return arr[arr.length-1];
//   else {
//     if (n > arr.length)
//       return arr;
//     else {
//       var ans = [];
//       for (let i = arr.length-n ; i < arr.length; i++)
//         ans.push(arr[i]);
//       return ans;
//     }
//   }
// };

// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));

// variable shadow-ing 
// var a = 1;
// console.log(a);

// (() => {
//   var a = 2;
//   console.log(a);
// })();

// console.log(a);

// global variables can be changed in any scope

// var tiger = {};
// tiger.name = 'simba';

// console.log(tiger.name);

// changeName = () => {
//   tiger.name = 'parth';
// };

// changeName();

// console.log(tiger.name);

// var name = 'parth';
// console.log(name);

// function func1() {
//   name = 'abc';
//   console.log(name);
//   function func2() {
//     name = 'parth';
//   }
//   func2();
//   console.log(name);
// }

// func1();

// function func3() {
//   name = 'xyz';
// }
// func3();
// console.log(name);

// for (let i = 0 ; i < 5 ; i++) {
//   console.log(`step ${i}`);
// }

// const message = (
//   `Space
//   The final frontier
//   These are the voyages of the starship Enterprise`
//   );
// console.log(message);

// const x = 5;

// console.log(`the number x is ${(x%2 === 0) ? 'even' : 'odd'}`)

// ------------------------

// A prototype for _.cloneDeep from lodash library 
// handles array also

// const cloneDeepArray = arg => {
//   const arr = [];
//   console.log(arg);
//   for (let i = 0; i < arg.length; i++) {
//     const value = arg[i];
//     console.log(value);
//     if (typeof value === 'object' && !Array.isArray(value))
//       arr.push(cloneDeep(value));
//     else if (Array.isArray(value))
//       arr.push(cloneDeepArray(value));
//     else
//       arr.push(value);
//   }
//   return arr;
// };

// const cloneDeep = source => {
//   const result = {};
//   const entries = Object.entries(source);

//   entries.forEach(entry => {
//     const [key,value] = entry;
//     if (typeof value === 'object' && !Array.isArray(value))
//       result[key] = cloneDeep(value);
//     else if (Array.isArray(value))
//       result[key] = cloneDeepArray(value);
//     else
//       result[key] = value;
//   });
//   return result;
// };

// const source = {
//   one: 1,
//   nest: {
//     two: 2,
//     three: 3
//   },
//   four: [4, 'four'],
//   log: function() {}
// };

// const customClone = cloneDeep(source);

// console.log(source);
// console.log(customClone);

// *** Question ***

// const luke = {
//   surname: 'Skywalker',
//   age: 19,
//   family: {
//     father: 'Anakin Skywalker',
//     mother: 'Padme Amidala',
//     siblings: ['Leia']
//   },
//   quote: function() {
//     console.log(
//       'I think that R2 unit may have been stolen'
//     );
//   }
// };

// const assignClone = Object.assign({}, luke);
// const spreadClone = { ...luke };
// const jsonClone = JSON.parse(JSON.stringify(luke));

// assignClone.age = 25;
// assignClone.family.father = 'Darth Vader';

// // What is the output?
// console.log('luke', luke);
// console.log('assignClone', assignClone);
// console.log('spreadClone', spreadClone);
// console.log('jsonClone', jsonClone);

// answer:
/*
  luke object with father as darth vader
  assignclone object with father as Darth Vader
  spreadClone object with father as Darth Vader
  jsonClone with father as Ananikin Skywalker
*/

// const carJson = `{
//   "color": "red",
//   "doors": 2,
//   "features": ["convertible", "four-wheel drive"],
//   "details": {
//     "year": 2019,
//     "manufacturer": "Honda"
//   },
// //   "sold": false,
// //   "owner": null
// // }`;

// // console.log(carJson);

// const source = {
//   kim: 99,
//   tom: 92
// };

// // The spread syntax looks like an ellipses: ...

// const clone = {
//   bob: 89,
//   ann: 95,
//   ...source, // the source object is spread into the target
//   ron: 85
// };

// console.log('clone', clone);

// const elements = ['fire', 'water'];

// // The spread syntax can be used for array merges
// [...elements, 'air', 'earth'];

// // The spread syntax can be used for array clones
// const elementsClone = [...elements];

// console.log('elementsClone', elementsClone);

// const sumXYZ = function(x, y, z) {
//   return x + y + z;
// }

// const numbers = [3, 5, 9];
// // The spread syntax applies the items of an array
// // as individual arguments
// sumXYZ(...numbers);
// // equivalent to sumXYZ(numbers[0], numbers[1], numbers[2]);

// closure signup

// function outer() {
//   let username = '';
//   let password = '';

//   function setUsername(name) {
//     username = name;
//   }
//   function setPassword(pass) {
//     password = pass;
//   }

//   return {
//     signup : function(name,pass){
//       setUsername(name);
//       setPassword(pass);
//     },   
//     getDetails : function() {
//       console.log(`username is ${username} and password is ${password}`);
//     },
//     signin : function(name,pass) {
//       return (name === username && pass === password);
//     }
//   };
// }

// const account = outer();
// account.signup('jerry', 'foo123');

// console.log(account);

// account.getDetails();

// console.log(`attempt one ${account.signin('jerry', 'foo123')}`);
// console.log(`attempt two ${account.signin('parth', 'foo123')}`);

// function sum(arg0) {
//   return function internal1(arg1) {
//     return function internal2(arg2) {
//       return function internal3(arg3) {
//         return function internal4(arg4) {
//           return function internal5(callback) {
//             callback(arg0+arg1+arg2+arg3+arg4);
//           }
//         }
//       }
//     }
//   }
// }

// sum(1)(2)(3)(4)(5)(result => console.log('result', result));

// class Building {
//   constructor(name, stories, address) {
//     this.name = name;
//     this.stories = stories;
//     this.address = address;
//     this.guests = [];
//   }

//   info() {
//     console.log(
//       'name:',
//       this.name,
//       '| stories:',
//       this.stories,
//       '| address:',
//       this.address
//     );
//   }

//   // getter methods can do dynamic calculation
//   // they take no arguments
//   get needElevator() {
//     return this.stories > 10;
//   }

//   // setter methods can do dynamic calculation
//   // they take one argument
//   set guest(value) {
//     this.guests.push(value);
//   }
// }

// const empireState = new Building(
//   'Empire State Building',
//   102,
//   'NY, NY'
// );

// console.log('empireState', empireState);

// empireState.info();

// const salesforceTower = new Building(
//   'Salesforce Tower',
//   61,
//   'SF, CA'
// );

// salesforceTower.info();

// console.log(
//   'salesforceTower.needElevator',
//   salesforceTower.needElevator // invoking the `needElevator` getter
// );

// // invoking the `guest` setter, twice
// salesforceTower.guest = 'J. Smith';
// salesforceTower.guest = 'A. Seedy';

// console.log(
//   'salesforceTower.guests',
//   salesforceTower.guests
// );

// (function(){console.log(this);})();

function fun3() {
  console.log('hi');
  return 2;
}

async function fun2() {
  try {
    const ans = await fun3();
    return ans;
  }
  catch(err) {

  }
}

async function fun1() {
  try {
    const ans = await fun2();
    console.log(ans);
  }
  catch(err) {

  }
}

fun1();
