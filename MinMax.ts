function findMinMax (numbers :  number[]) : Record<"min"|"max", number> |null{
    if (numbers.length===0){
        return null;
    }
    let min :number = numbers[0];
    let max :number = numbers[0];
    numbers.forEach((num)=>{
        if (num>max){
            max = num
        }

        if (num<min){
            min = num
        }
    })
    return {max, min};
}