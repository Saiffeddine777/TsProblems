type EvenAndOdd ={
    even : number;
    odd :number;
}

function countEvenAndOdd(numbers : number []) : EvenAndOdd {
    if (numbers.length===0){
       return  {even :0  , odd: 0}; 
    }

    let even : number =0;
    let odd :number = 0 ;

    for (let num of numbers){
        if (num % 2 ===0){
            even ++;
        }
        else {
            odd++;
        }
    }

    return {even ,odd}
}