let marks = Array(5);
marks = [1, 2, 3, 4, 5];
console.log(marks);

//Accessing array elements
console.log("Accessing array elements...");
let a = [1, 2, 3, 4, 5];

//Access array elements
console.log(a[1]);

//Array length
console.log("Array length: " + a.length);

//Add element on array at the end 
a.push(6);
console.log("After push: " + a);

////Remove element on array from the end 

a.pop();
console.log("After pop: " + a);

//Add element on array at the beginning
a.unshift(6);
console.log("After unshift: " + a);

a.includes(3) ? console.log("3 is present in the array") : console.log("3 is not present in the array");

let ab = [1, 2, 3, 4, 5];
console.log("After slice: " + ab.slice(1,4));

//Used to sum up elements from an array METHOD 1
let sum = 0;
for(let i=0; i<ab.length; i++){
    sum += ab[i];
}
console.log("Sum of array elements: " + sum);

//Used to sum up elements from an array METHOD 2
let total = ab.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Total of array elements using reduce: " + total);


//Create an sub array from marks of students array having even numbers
let markers = [13, 24, 36, 42, 25, 36, 48, 50, 51, 60];
let evenMarks = markers.filter((mark) => mark % 2 === 0);
console.log("Even marks: " + evenMarks);


/*let evenMarks = markers.filter((markes) => markes % 2 === 0);
console.log("Even marks: " + evenMarks);*/

let tripledEvenMarks = evenMarks.map(mark => mark * 3);
console.log("Tripled even marks: " + tripledEvenMarks);

//Sort Array elements in ascending order
let sortTest = [5, 2, 9, 1, 5, 6];
sortTest.sort((a, b) => a-b);
console.log("Sorted array: " + sortTest);

sortTest.sort((a, b) => b-a);
console.log("Sorted array: " + sortTest);
