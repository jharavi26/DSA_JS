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