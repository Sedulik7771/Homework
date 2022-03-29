function CountOcurrances (str, symbol) {
    let a = split (" ")
    let count = 0;
    for (let i =0; i < a.length; i++) {
        if (symbol = (a[i])) {
            count++
        }
    }
    count++
}


function checkPalindrome(string) {
    let a = string.length;

   for (let i = 0; i < a / 2; i++) {

        if (string[i] !== string[a - 1 - i]) {
           return 'It is not a palindrome';
       }
   }
   return 'It is a palindrome';
}



function largest(arr) {
    let max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}


