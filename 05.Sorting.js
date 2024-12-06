// Selection Sort is a simple comparison-based sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the array and swapping it with the first unsorted element. This process continues until the entire array is sorted.

function SelectionSort(arr){
  for(i=0; i<=arr.length-1; i++){
    let minIndex = i

    for(let j =i+1; j<arr.length; j++)
    {
      if (arr[j]<arr[minIndex]){
        minIndex = j;
      }
    }
    if (minIndex !==i){
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;

}

console.log(SelectionSort([64, 25, 12, 22, 11]));


function SelectionSortDsc(arr){
  for(i=0; i<=arr.length-1; i++){
    let maxIndex = i

    for(let j =i+1; j<arr.length; j++)
    {
      if (arr[j]>arr[maxIndex]){
        maxIndex = j;
      }
    }
    if (maxIndex !==i){
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
  }
  return arr;

}

console.log(SelectionSortDsc([64, 25, 12, 22, 11]));

//Bubble Sort :- Bubble sort is a basic algorithm that arranges a list of data in order by comparing adjacent elements and swapping them if they are out of order.

function BubbleSort(arr){
  for(let i=0;i<=arr.length-1;i++){
    let swap=false 
    for(j=0; j<=arr.length-1; j++){
      if(arr[j]>arr[j+1]){
        [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
        swap = true;
      }
    }
    if (swap == false)
      break;
  }
  return arr;
}

console.log(BubbleSort([10,40,20,50,7]));


function BubbleSortDes(arr){
  for(let i=0;i<=arr.length-1;i++){
    let swap=false 
    for(j=0; j<=arr.length-1-i; j++){
      if(arr[j]<arr[j+1]){
        [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
        swap = true;
      }
    }
    if (swap == false)
      break;
  }
  return arr;
}

console.log(BubbleSortDes([10,40,20,50,7]));

//Inseration Sort :-