module.exports = class Person {
    age = 24

    get location() {
        return 'London';
    }

    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
       
    }

    fullName() {
        return this.fName + " " + this.lName;
    }
}

/*let person = new Person('John', 'Doe');
console.log(person.fName);
console.log(person.age);
console.log(person.fullName());*/