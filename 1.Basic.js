// Sum of All Natural Numbers

function sum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log("Sum of the natural numbers up to ", sum(5));

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





