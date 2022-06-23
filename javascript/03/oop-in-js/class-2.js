class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let p = new Person('John', 30);

Person.country = "USA";

console.log(p.country)

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}
// Student.prototype inherit from Person.prototype
/** Assignment 3: Why? */
console.log(Student.country)