// Sum of All Natural Numbers

function sum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log("Sum of the natural numbers up to ", sum(5));

//Reverse of Number

function reverse(n){
  let sum = 0;
  while(n>0)
  {
    let last = n%10;
    sum = sum *10 + last;
    n = Math.floor(n/10);
  }
  return sum;
}

console.log(reverse(431));

// Sum of Digits :-

function sumofDigits(n){
    let sum =0;
    while(n>0){
        sum += n%10;           // 10%3=1
        n = Math.floor(n/10);  // 10/3=3
    }
    return sum;
}
console.log(sumofDigits(646));


// Count number of Digits 

function countDigits(s){
    s = Math.abs(s);      // Ensure the number is positive
    let count = 0;
    do {
        count++
        s = Math.floor(s/10)    // Continue until s is 0
    } while(s>0);
        return count;
}

console.log(countDigits(4346));

// check the Palindrom 

function checkPalindrome(num){
    let numstr = num.toString();                    // Convert the number to a string
    let result = numstr.split('').reverse().join('');
    return numstr===result;
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome(4345));


//second method 

function isPalindromeNumber(num) {
    const str = num.toString();
    let reversedStr = '';
    
    // Manually reverse the string using a for loop
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
       
    }
    // Compare the original string with the reversed string
    return str === reversedStr;
}
console.log(isPalindromeNumber(12321));

//str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

// Two Pointer Approach 

function Palindrome(str){
    let left = 0;
    let right = str.length-1
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        } left++;
        right--;
    } return true;
}

console.log(Palindrome("Madam"))

//Fibonnachi Number :- 

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(5): " + fibonacci(5));

//Factorial of The Number 

function factorial(num){
  let res=1;
  if(num===0) return 1;
  for(let i=2; i<=num; i++){
    res = res*i;
  }
  return res;
  }

console.log(factorial(6));   //720

//Prime Number 

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}


// Missing Number is 

function Missing (arr){
  let sum = 0;
  let n = arr.length+1;
  let actualSum = n*(n+1)/2;
  for(let i = 0; i<arr.length ; i++)
  {
  sum += arr[i]
  }

  return actualSum-sum;
}

console.log(Missing([1,2,4,5]));

// find Armstrong Number 
 
function Armstrong(num){
    let digits = num.toString().length;               // to find out number of digits
    let sum = 0;
    let temp = num;
    while(temp > 0){
        let digit = temp % 10;
        sum = sum + digit ** digits;
        temp = Math.floor(temp / 10);
    } return sum == num;
}

console.log(Armstrong(151))           // false
console.log(Armstrong(153))           // true

 // Greatest Common Divisor  :- The largest number that divides both numbers exactly (no remainder).
 
 function GCD(a, b){
    while(b !== 0){
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

console.log(GCD(16, 64));

// LCM(a,b)×GCD(a,b)=a×b

//Least Common Multiple :- The smallest number that is divisible by both numbers.

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 18)); // 36



//Find out The GCD of Number :-

function gcd(a, b){
  if(b===0) return a;
  return gcd(b, a%b)
}
console.log(gcd(4,12))

//Find out the LCM of a nuumber

function gcd(a, b){
  if(b===0) return a;
  return gcd(b, a%b)
}
function lcm(a, b){
  return (a*b) / gcd(a,b)
}

console.log(lcm(6,12))






