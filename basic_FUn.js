let person = {
    fName: "John",
    lName: "Doe",
    age: 30,
    fullName: function(){
        return this.fName + " " + this.lName;
    }
};

    //Object is collection of key-value pairs. The key is a string and the value can be any data type including another object or function. In this case, fullName is a method of the person object that returns the full name of the person by concatenating the first name and last name. 


console.log(person.fName); // Output: "John Doe"
console.log(person['age']); // Output: 30
person.hobby = "Reading"; // Adding a new property to the person object
console.log(person.hobby); // Output: "Reading"
delete person.age; // Deleting the age property from the person object
console.log(person); // Output: { fName: "John", lName: "Doe", hobby: "Reading" }

for (let key in person) {
    console.log(key + ": " + person[key]); 
    // Output: fName: John, lName: Doe, hobby: Reading
}

console.log(person.fullName()); // Output: "John Doe"