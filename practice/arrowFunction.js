var func = function(){
   var firstName = 'Houston';
  var newPerson = {
    firstName : 'luis',
    lastName : 'Hamilton',
    greet: () => { console.log('hi ' + newPerson.firstName); }
  }
  newPerson.greet();
  (() => {console.log('123')})();
}

func();