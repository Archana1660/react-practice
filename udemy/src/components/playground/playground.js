import React from 'react';

class Person {
    constructor(name = 'Anonymous', age = 0){
      this.name = name;
      this.age = age;
    }
    getDescription(){
      return `${this.name} is ${this.age} years old.`;
    }
  };
  
  class Student extends Person {
    constructor(name, age, major){
      super(name, age);
      this.major = major
    }
    hasMajor(){
      return !!this.major
    }
    
    getDescription(){
      let description = super.getDescription();
      if(this.hasMajor()){
        description +=` Their major is ${this.major}`;
      }
      return description;
    }
    
  };
  
  
class Traveller extends Person{
    constructor(name, age, location){
      super(name, age);
      this.location = location;
    }
    
   /* hasLocation(){
      return !!this.location;
    }*/
    
    getGreeting(){
      let greet = super.getGreeting();
      if(this.location){
        greet += ` I am from ${this.location}`
      }
      return greet;
    }
  }
  
  const theTraveller = new Traveller('Archana', 28, 'Assam');
  console.log(theTraveller.getGreeting());
  
  const otherTraveller = new Traveller();
  console.log(otherTraveller.getGreeting());
  
  const theStudent = new Student('Archana', 28, 'CSE');
  console.log(theStudent.getDescription());
  
  const otherStudent = new Student();
  console.log(otherStudent.getDescription());
  
  //const me = new Person('Archana Mech', 28);
  //console.log(me.getDescription());
  
  //const other = new Person();
  //console.log(other.getDescription());
  
  