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

var coder = {
  username: 'joe',
  years: 3,
  logStatus: () => {
    // An arrow function does not create a `this` object
    // this = Window object
    console.log('working from office');
  },
  logProfile: function() {
    // A function expression creates a `this` object
    // this = owner object
    console.log('username:', this.username);
    console.log('years coding:', this.years);
  }
};

coder.logProfile();