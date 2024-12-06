// Recursion :- Recursion is a programming concept where a function calls itself to solve smaller instances of a problem.
// Base Case: A condition that stops the recursion to prevent an infinite loop.
// Recursive Case: The function calls itself with modified arguments, moving closer to the base case.



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

function Sum(i, n, total=0){
  if(i>n)
  {
    console.log(total);
    return;
  }
  total = total+i;
  Sum(i+1,n,total)

}
Sum(1,7);

//Factorial of Number using Recursion 

function Factorial(n){
   if(n==0 || n==1){
  return 1;
   }

   return n*Factorial(n-1);
}
console.log(Factorial(6));

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


