var person = {
  firstName: 'john',
  lastName: 'Doe',
  whatIsThis: function() { console.log(this); },
  greet: function(whatIsThis) { console.log('Hi!', this.firstName); }
}

person.greet();

var student = {
  firstName : 'Parth',
  lastName : 'Vashisht'
}

// bind function
// returns a funciton whit 'this' bound
var greetStudent = person.greet.bind(student)

greetStudent();

// call
// calls a function with 'this' bound
person.greet.call(student);

// apply
// behaves just like call but multiple arguments can be passed
person.greet.apply(student, ['hi']);  

