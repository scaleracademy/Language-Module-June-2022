class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

let p = new Person('John', 30);
let p1 = { name: 'John', age: 30 };
let s = new Student('John', 30, 'A');
console.log(p)
console.log(p1)

console.log(JSON.stringify(p))
console.log(JSON.stringify(p1))

console.log(p.__proto__.__proto__ === p1.__proto__)
console.log(p.__proto__.__proto__ === Object.prototype)
console.log(p.__proto__ === Person.prototype)

console.log(typeof Person)