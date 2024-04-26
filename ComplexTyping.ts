type MaxLengthArray<T, N extends number> = N extends N ? number extends N ? T[] : _MaxLengthArray<N, T, []> : never;
// // MaxLengthArray<T, N extends number>: This is a generic type that takes two type parameters: T (the type of the array elements) and N (the maximum length of the array).

// // N extends N ? number extends N ? T[] : _MaxLengthArray<N, T, []> : never: This is a conditional type. It checks if N extends N, which is always true. Then it checks if number extends N. 
// // If N is a specific number (like 10), number does not extend N, so it falls back to _MaxLengthArray<N, T, []>. If N is the type number, it resolves to T[].
 type _MaxLengthArray<N extends number, T, R extends unknown[]> = R['length'] extends N ? R : _MaxLengthArray<N, T, [T, ...R]>;

// //_MaxLengthArray<N extends number, T, R extends unknown[]>: This is another generic type that takes three
// // type parameters: N (the maximum length of the array), T (the type of the array elements), and R (an array type used for the recursion).

// // R['length'] extends N ? R : _MaxLengthArray<N, T, [T, ...R]>: This is another conditional type. It checks if the length of R extends N. If it does, it resolves to R, effectively limiting the length of the array to N. 
// // If it doesn’t, it recursively calls _MaxLengthArray with [T, ...R] as the third argument, effectively adding another element to the array.


let arr: MaxLengthArray<number,20>;

let someting : void = null ; 

let thing :never ;

type Something <T> = T extends string?{length : number}: {day: string}

const some :Something<boolean> = {day:"Wednesday"}

let EmptySet : Set<string> = new Set()

EmptySet.add("Messi")
EmptySet.add("Ronaldo")
let Arr : string[] = []

EmptySet.forEach((element)=>{
    Arr.push(element)
})


let EmptyMap :Map<string,number> = new Map()

EmptyMap.set("one",1)
EmptyMap.set("two",2)
EmptyMap.set("three",3)
EmptyMap.set("four",4)


const objectifyAMap:(map:Map<string , number>)=>any=(map)=>{
     let acc : any ={}
     map.forEach((element ,key)=>{
         acc[key] = element
     })
     return acc
}


console.log(objectifyAMap(EmptyMap))




