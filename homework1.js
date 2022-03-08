
// Task 1

var a, b;

a = +prompt( "a > b");
b = +prompt("a > b");

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b);


// Task 2

var name = prompt('Write your name',),
    age = +prompt('write your age',);

console.log("My name is" + " " + name, "I am" + " " + age);

// Task 3

var isNumberOdd = +prompt('Write a number',);

if (isNumberOdd % 2 == 0) {
    console.log('No');
} else {
    console.log('Yes');
}



 // Task 4


var isNegative = +prompt('Write a number',);

if (isNegative < 0) {
    console.log('Yes');
} else {
    console.log('No');
}


// Task 5

	
var num1 = +prompt('Write first number'),
    num2 = +prompt('Write second number');

if (Math.max(num1, num2) % Math.min(num1, num2) === 0) {
    console.log(1);
} else {
    console.log(0);
}



// Task 6


var seasonNumber = +prompt('number between 1 and 12');

switch (seasonNumber) {
    case 1: 
        console.log('January');
        break;
        
    case 2:
        console.log('February');
        break;

    case 3:
        console.log('March');
        break;

    case 4: 
        console.log('April');
        break;

    case 5:
        console.log('May');
        break;

    case 6: 
        console.log('June');
        break;

    case 7:
        console.log('July');
        break;

    case 8: 
        console.log('August');
        break;

    case 9:
        console.log('September');
        break;

    case 10:
        console.log('October');
        break;

    case 11:
        console.log('November');

    case 12:
        console.log('December');
        break;
}



// Task 7


var num1 = +prompt('Write a number'),
    num2 = +prompt('Write a number'),
    num3 = +prompt('Write a number');

    console.log(Math.max(num1, num2, num3));


