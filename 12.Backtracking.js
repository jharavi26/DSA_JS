//Tower of honoi 

function tower(n, source , destination , aux){
  if(n===1){
    console.log(`move disk 1 from ${source} to ${destination}`)
    return ;
  }

  tower(n-1 , source , destination , aux)

  console.log(`move disk ${n} from ${source} to ${destination}`)

  tower(n-1 , aux, source , destination)
    
}

tower(3, "A" , "B" , "C")

// find All Subset using Recursion

function findSubset(nums, index = 0, current=[], result=[]){
  if(index === nums.length){
    result.push([...current])
    return;
  }

  current.push(nums[index])
  findSubset(nums, index+1, current, result)

  current.pop();
  findSubset(nums, index+1, current, result)

  return result;
}

console.log(findSubset([1, 2, 3]));


//Find all Permutations 

function permutation(nums, start=0, result=[]){
  if(start === nums.length){
    result.push([...nums])
    return 
  }

  for(let i=start; i<nums.length; i++){
    [nums[start] , nums[i]] = [nums[i], nums[start]];
    permutation(nums, start+1, result);
    [nums[start], nums[i]] = [nums[i], nums[start]]

  }

  return result;

}

console.log(permutation([1,2,3]));


//Combinational Sum 

function sum(arr, target){
  let result = [];

  function search(start, combination, sum)
  {
    if(sum === target){
      result.push([...combination])
      return 
    }

    if(sum>target) return ;

    for(let i=start ; i<arr.length ; i++){
      combination.push(arr[i]);
    search(i, combination , sum+arr[i]);
    combination.pop();

    }
  }

  search(0, [], 0)
  return result;
}

console.log(sum([2,3,4,5], 6))



