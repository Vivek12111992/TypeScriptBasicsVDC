const Person = require('./basics_class.js');
let a = 'Monday '
a.slice(0, 3)
// The code will return 'Mon' which is the substring of 'Monday ' from index 0 to index 3 (not inclusive).
console.log(a.slice(0, 3)); // Output: 'Mon'

let b = '12'
let c = '34'
console.log(b + c); // Output: '1234'

console.log(parseInt(b) + parseInt(c)); // Output: 46
console.log(parseInt(c) - parseInt(b)); // Output: 22

let d = 12
d.toString() // The code will convert the number 12 to a string '12'.
console.log(d.toString()); // Output: '12'


let person = new Person("John", "Doae");
console.log(person.fullName()); // Output: 'John Doe'