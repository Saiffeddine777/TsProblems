function mostFrequentElement(numbers: number[]): number | undefined {

  if (numbers.length ===0){
    return undefined
  }


  let acc :Record <number, number> ={}

  for (let num of numbers){
    if (acc[num]){
      acc[num] += 1;
    }
    else{
      acc[num]=1;
    }
  }

  const accArray :[string, number ][]= Object.entries(acc);
  
  let max :number = accArray[0][1];
  let toReturn :number  = parseInt(accArray[0][0]);
  
  accArray.forEach((element)=>{
     if (element[1]>max){
      max = element[1];
      toReturn = parseInt(element[0]);
     }
  }) 
  return toReturn;
    
}