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

