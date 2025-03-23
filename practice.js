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