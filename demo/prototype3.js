/*
* Created by Steven Lee
* Date: 2020/6/27
* Time: 10:20
* Project: DIY
* */

function Person() {

}

var friend  = new Person()

Person.prototype = {
  constructor: Person,
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  sayName : function () {
    
    console.log(this.name);
  }
};

friend.sayHello()
