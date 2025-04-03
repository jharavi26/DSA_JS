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



