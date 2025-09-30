// #What doesn't belong to these?

// Write a method that takes an array of elements and returns the element that does not belong to these elements.

// Example:

// [1, 2, 2, 2, 2] -> 1
// ['1', 2, '4', '6', '8'] -> 2
// [2, 2, -2, 6, 10] -> -2
// ['a', 'a', 'b', 'a', 'a', 'a', 'a'] -> 'b'
// Look in the example tests. (The submit tests have no additional surprises!)

// The elements will only be of the types:
// boolean, char (or string with one char in JS/TS) or int (number in JS/TS).

// The array will never be null and there will always more than 2 values in the array!

// It is always exactly one element that does not belong to the other elements.
// The values in the array will never be null or undefined or 0.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

export  function findTheNotFittingElement(series:any[]):any{
     if (series.length <3){
        return null;
     }
     else{
        if ( series.map((e,i)=>typeof e).indexOf("number") === series.map((e,i)=>typeof e).lastIndexOf("number")){
           return series[series.map((e,i)=>typeof e).indexOf("number")]
        }
        if ( series.map((e,i)=>typeof e).indexOf("string") === series.map((e,i)=>typeof e).lastIndexOf("string")){
            return series[series.map((e,i)=>typeof e).indexOf("string")]
         }
     }
  }

  console.log(findTheNotFittingElement(['1', 2, '4', '6', '8']))