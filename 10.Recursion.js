// Recursion :- Recursion is a programming concept where a function calls itself to solve smaller instances of a problem.
// Base Case: A condition that stops the recursion to prevent an infinite loop.
// Recursive Case: The function calls itself with modified arguments, moving closer to the base case.

// Backtracking is an algorithmic technique used for solving recursive problems by trying out all possible options and discarding those that fail to satisfy the given constraints. It is often used in problems involving decision-making, searching, and constraint satisfaction.



function displayNumber(n){
  if(n>10){                          //Base Case
  return;
  }
  console.log(n);
  displayNumber(n+1);              //Recursive Case 
  
}

displayNumber(0);

// Print Name N times using Recursion

function displayName(i,n){
  if(i>n){
    
    return ;
  }
  console.log("Ravikumar");
  displayName(i+1,n);
}
displayName(1,5);

// Print N to 1 using Recursion

function display(i,n){
  if(i<n)
  {
    return;
  }
  console.log(i)
  display(i-1,n)
}
display(10,1);

//Sum of First Number

function sum(n){
  if(n<=1) return 1;
  return n + sum(n-1);
  } 

  console.log(sum(5));

//Factorial of Number using Recursion 

function factorial (n){
  if(n<=1) return n;
  let fact = 1;
  for(let i =1; i<=n; i++)
  {
    fact *= i;

  }
  return fact;
}

console.log(factorial(5));


function Factorial(n){
   if(n==0 || n==1){
  return 1;
   }

   return n*Factorial(n-1);
}
console.log(Factorial(6));

//Sum of Digits 

function factorial(n) {
  if(n==0) return 0 ;
  return (n%10) + factorial(Math.floor(n/10))

}

console.log(factorial(354)); //12


//Count the number 

function count(n){
  if(n<10) return 1;
  return 1 + count(Math.floor(n/10))
  
  } 
  
  console.log(count(3456))



//Power of N 

function power(x,n){
  if(n===0) return 1;

  return x * power(x , n-1);
}

console.log(power(4,3))

// Reverse Array using Recursive 

function RevArray(arr){
  if(arr.length<=1)
  {
    return arr;                    //arr.slice(1): This creates a new array that excludes the first element (arr[0]) of the original array.
  }
  return RevArray(arr.slice(1)).concat(arr[0]);   // concat() is a method that appends one or more values to the end of an array.
} 
console.log(RevArray([1,2,3,4,5,6]));

//Check if A String is Palindrome or not
//The slice() method in JavaScript is used to extract a portion of an array into a new array without modifying the original array.

function CheckPalindrome(str){
  if (str.length<=1){
    return true;
  }
  if(str[0] !==str[str.length-1]){
  return false
  }
 
  return CheckPalindrome(str.slice(1,-1));
}

console.log(CheckPalindrome("Radar"));

//Fibonacchi Number 

function fibonacci(n) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  // Recursive formula
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(6)); // Output 8


// Sum of Array Element 

function sum(arr){
  if(arr.length  === 0) return 0;

    return arr[0] + sum(arr.slice(1));
}

console.log(sum([1,2,3,4]))




