//Inheritance is a mechanism in object-oriented programming that allows a class to inherit properties and methods from another class.
//Once class inherits from another class, it can access the properties and methods of the parent class as if they were its own.
// This allows for code reuse and helps to create a hierarchy of classes that share common functionality.
// In JavaScript, inheritance can be achieved using the prototype chain or the class syntax introduced in ES6.

//Example of inheritance using class syntax 
const Person = require("./basics_class.js")
class Pet extends Person {
    
    constructor(name, age) {
        super(name, age); // Call the parent class constructor with name and age
    }

    get location()
    {
        return "Peta"
    }
}

let pet = new Pet("Timon", "Pumba")
console.log(pet.location) // Output: "Peta"
console.log(pet.fullName()) // Output: "Timon Pumba"
