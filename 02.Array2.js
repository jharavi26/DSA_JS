//Two Sum 

function Two(arr ,target){
  const hashmap = new Map();
  for(let i =0 ; i< arr.length ; i++)
  {
    const num = arr[i];
    const complement = target-num;
  if(hashmap.has(complement)){
    return [hashmap.get(complement) , i]
  }

  hashmap.set(num,i)
}
return []
}

console.log(Two([1,2,3,4,5,6,],9));  //[3,4]



  //Majourity of Element :-

  function FindMajorElement(num){
    const Frequency = {};
    const MajorElement = Math.floor(num.length/2);
    let nums;

    for(let i=0; i<num.length;i++){
    nums = num[i];
    Frequency[nums] = (Frequency[nums] || 0)+1; 
    }
    if(Frequency[nums]>MajorElement){
      return nums;
   
    }
    return -1;
  }

  console.log(FindMajorElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));

  //Kadane's Maximum Subarray Algorithm 

  function kadane(num){
    let globalSum = num[0];
    let currentSum = num[0];
  
    for(let i = 1 ; i<num.length ; i++){
      currentSum = Math.max(num[i] , currentSum + num[i] );
  
      globalSum = Math.max(globalSum , currentSum)
  
    }
  
    return globalSum;
  }
  
  console.log(kadane([2,3,4,5,6]));  //20


  //Product of Subarray

  function product(arr){
    let maxProd = arr[0];
    let minProd = arr[0];
    let result  = arr[0];
    
      for(let i = 1; i<arr.length ; i++){
        let temp = maxProd;
        maxProd = Math.max(arr[i] , maxProd*arr[i], minProd*arr[i]);
        minProd = Math.min(arr[i] , temp*arr[i], minProd*arr[i]);

        result = Math.max(result, maxProd);
    }

    return result;
}

console.log(product([-2,3,-4]))

//sum of zero of subarray 

function sumofZero(arr){
  let sum =0;
  const set = new Set();

  for(let i=0; i<arr.length; i++){
      sum += arr[i] ;
  if(sum === 0 || set.has(sum)) return true;
  set.add(sum);
  }
  return false;
}

console.log(sumofZero([1,3,4-7]));


    //Buy & Sell :-It involves finding the maximum profit you can achieve from buying and selling a stock given its price over a series of days.

    function MaxProfit(price){
      let maxProfit = 0;
      let currentProfit = 0;
      for(let i =1 ; i<price.length ; i++)
      {
        currentProfit = Math.max(0 , currentProfit + (price[i] - price[i-1]));
          maxProfit = Math.max(maxProfit , currentProfit)
      }
      return maxProfit;
    }
     
    const price = [7,1,5,4,6,3];
    console.log(`Maxprofit is : `, MaxProfit(price));  // 6-1 = 5
 


// Find the Subarray with a Given Sum (Sliding Window)

function sliding(arr, target){
  let start = 0;
  currentSum = 0;
  for(let end= 0; end<arr.length ; end++){
    currentSum += arr[end];

    while(currentSum > target && start <=end)
    {
      currentSum -= arr[start];
      start++
    }

    if(currentSum === target)
    {
      return arr.slice(start , end+1)
    }

  }
  return [];
}

console.log(sliding([2,3,4,5,6,7], 15));


//swap number based on even & odd indicies

function swap(arr){
  let evenidx = 0;
  let oddidx = 1;
  let n = arr.length;
  while(evenidx < n && oddidx < n )
  {
    while (evenidx < n && arr[evenidx]%2 === 0){
      evenidx +=2;
    }
    while (oddidx < n && arr[oddidx]%2 === 1) {
        oddidx +=2;
  }
  if(evenidx < n && oddidx < n)
  {
    [arr[evenidx] , arr[oddidx]] = [arr[oddidx] , arr[evenidx]] 
  }
}

  return arr;
}

console.log(swap([3,1,2,4]))


// swap Number based on Positive & Negative

function swap(arr){
  let positive = 0;
  let negative = 1;
  let n = arr.length;
  while(positive < n && negative < n )
  {
    while (positive < n && arr[positive] >= 0){
      positive +=2;
    }
    while (negative < n && arr[negative] <= 0){
        negative +=2;
  }
  if(positive < n && negative < n)
  {
    [arr[positive] , arr[negative]] = [arr[negative] , arr[positive]] 
  }
}

  return arr;
}

console.log(swap([-3,1,2,-4]))

// Find the Smallest Subarray with Sum Greater Than a Given Value (Sliding Window)

function siliding(arr,target){
  let start = 0;
  let sum = 0;
  let minlength = Infinity;
  let result = [];
  for(let end = 0 ; end <arr.length ; end++)
  {
    sum += arr[end];
    while(sum >= target ){
      if(end - start + 1 < minlength ){
        minlength = end - start + 1;
        result = arr.slice(start , end+1);
      }

      sum -= arr[start];
      start++
    
    }
   
  }
  return result;
  
}

console.log(siliding([1,2,3,4,5,6] , 7));

 