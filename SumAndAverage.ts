type SumAndAverageResult={
    sum : number;
    avg : number | null;
}

function sumAndAverage (numbers : number[]): SumAndAverageResult{
    if (numbers.length ===0){
        return {avg :null, sum :0};
    }
    let avg :number = 0;
    let sum :number = 0;

    numbers.forEach((element)=>{
        sum +=element;
    })

    avg = sum / numbers.length;
    
    return{avg, sum}
}