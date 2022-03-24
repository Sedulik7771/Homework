

1.	Given an array․ Compute the length of the array. (without using .length)

answer: 

var arr = [1, 2, 4, 5, 6];
var length = 0;

for (var key in arr) {

    length += 1;
}


2. Given an array of numbers. Print the sum of the elements in array.

answer: 

var arr = [1, 2, 4, 5, 6];
var sum = 0;

for (var key in arr) {

    sum += +arr[key];
}



3. Given two numbers. Print powers of 3 between that numbers. (without using Math.pow)

answer:

var x = 0, y = 1500;
sum = 3;

while ((((sum * 3) > x)) && (((sum * 3) < y))) {
    sum *= 3;

    console.log(sum);
}


4.Given a number as input, insert dashes (-) between each two even numbers. 

answer: 

var numbers = prompt('Write numbers');
newNumbers= '';

for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0)) {
        newNumbers = newNumbers+ numbers[i] + '-';
    } else {
        newNumbers = newNumbers + numbers[i];
    }
}


5.Insert a n positive number. Print the n-st prime number.

var isNumberPrime = false;
var primeNumbers = [];
var findPrimeNumber = +prompt('Write index of prime number');

 for (var i = 2; i <= 100; i++) {
     if (i === 2 || i === 3) {
         primeNumbers.push(i);
     }
   
   for (var j = 2; j <= i / 2; j++) {
       if (i % j !== 0) {
           isNumberPrime = true;
       } else {
           isNumberPrime = false;
           break
       }
   }
     
    if (isNumberPrime) {
        primeNumbers.push(i);
    }
}


console.log(primeNumbers[findPrimeNumber]);

