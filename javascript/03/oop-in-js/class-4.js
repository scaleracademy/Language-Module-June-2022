class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value) {
    const parts = value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

const p = new Person('John', 'Doe')
console.log(p.fullName)
p.fullName = 'Jane Darcy'
console.log(p)
