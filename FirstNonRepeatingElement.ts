function firstNonRepeatingElement (numbers: number[]):number | void{
    for (const num of numbers){
        if (numbers.indexOf(num)===numbers.lastIndexOf(num)){
            return num;
        }
    }
}


function firstNonRepeatingElementOptimized (numbers: number[]):number | void{
    let mapOfNumbers : Map<number, number> = new Map();
    numbers.forEach((element)=>{
        if (mapOfNumbers.get(element)){
            const value = mapOfNumbers.get(element);
            mapOfNumbers.set(element , value as number +1)
        }
        else mapOfNumbers.set(element , 1);
    })
    
}