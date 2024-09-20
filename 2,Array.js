let fruits = ['apple', 'mango', 'banana'];
fruits.push("cherry");     //Adds Cherry to the end
console.log(fruits);

fruits.unshift("Pineapple");   // Adds Pineapple to the beginning
console.log(fruits);

console.log(fruits.length);

for(let i=0;i<fruits.length; i++){    // iterate using Loop 
    console.log(fruits[i]);
}

fruits.forEach((fruits, index) =>{
    console.log(`fruits at index ${index} is ${fruits}`);  // forEach Method used to execute a provided function once for every element.
});

let moreFruits = ['Graphs','watermelon'];
let allFruits = fruits.concat(moreFruits);  //using concat method 
console.log(allFruits) 


