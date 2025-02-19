

function twoSum(arr, target) {
  const hashMap = new Map(); // To store numbers and their indices

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];  // Current number
    const complement = target - num;  // Complement to the target sum

    // Check if the complement exists in the hash map
    if (hashMap.has(complement)) {
      // Return the indices of the complement and the current number
      return [hashMap.get(complement), i];
    }

    // Store the current number and its index in the hash map
    hashMap.set(num, i);
  }

  return []; // Return empty if no pair is found
}

console.log(twoSum([2, 7, 11, 15], 22)); // Output: [1, 3]

//Sort an array of 0s, 1s and 2s

function sortArray(arr){
  let mid=0, low=0, high=arr.length-1;
  while(mid<=high){
    if(arr[mid]===0){
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    }
    else if(arr[mid]===1){
      mid++;
    }
    else {
      [arr[mid],arr[high]] = [arr[high],arr[mid]];
      high--;

      }
    }
    return arr;

  }
  console.log(sortArray([0, 1, 2, 0, 1, 2]));

  //Majourity of Element :-

  function FindMajorElement(num){
    const Frequency = {};
    const MajorElement = Math.floor(num.length/2);

    for(let i=0; i<num.length;i++){
      const nums = num[i];
    Frequency[nums] = (Frequency[nums] || 0)+1; 

    if(Frequency[nums]>MajorElement){
      return nums;
    }
   

    }
    return -1;
  }

  console.log(FindMajorElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));

  //Kadane's Maximum Subarray Algorithm 

  function kadaneMax(num){
    let MaxSum = Number.MIN_SAFE_INTEGER;
    let currentSum=0;
    let start, end, temporary = 0;
    for(let i=0; i<num.length; i++)
    {
      currentSum += num[i];

    if(currentSum>MaxSum){
      MaxSum = currentSum;
      start = temporary;
      end=i;
    }

    if(currentSum<0)
    {
        currentSum = 0;
        temporary = i+1;
    }
    
    }

    console.log("MaxSum sum is ",MaxSum);
    console.log(`Subarray: [${num.slice(start, end + 1).join(", ")}]`);
    return MaxSum;
  }

    const num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    kadaneMax(num);

    //Buy & Sell :-It involves finding the maximum profit you can achieve from buying and selling a stock given its price over a series of days.
    
    function MaxProfit(price){
      let minprice = Number.MAX_SAFE_INTEGER;
      let MaxProfit = 0;

      for(i=0; i<price.length; i++){
        if(price[i]<minprice){
          minprice = price[i];
        }
    const profit = price[i] - minprice;
    
    if(profit > MaxProfit)
    {
      MaxProfit = profit;
  }
}
return MaxProfit;
 }

 const price = [7,1,5,4,6,3];
 console.log(`Maxprofit is : `, MaxProfit(price));

 