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
  if(num===0)
    return 1;
  for(let i=2; i<=num; i++){
    res = res*i;
  }
  return res;
  }

console.log(factorial(6));   //720

//Prime Number 
function CheckPrime(n){
  let i, flag = true;
  for(i=2; i<=n-1; i++)
  {
    if(n % i==0){
      flag=false;
      break;
    }
   }
  if(flag==true)
  {
    console.log(n + " Number is Prime");
    return;
  }
  else{
    console.log(n + " Number is not Prime");
  }
 }
CheckPrime(4);

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
 
function armstrong(n){
  let num = n.toString().length;
  let sum = 0 ; 
  temp = n;

  while(temp>0)
  {
    let digit = temp % 10;
    sum += Math.pow(digit , num)
    temp = Math.floor(temp/10);
  }

  return sum === n;

}

console.log(armstrong(153));

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






