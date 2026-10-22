function countFrequancies (numbers :number[]): Record<number, number>{
    let acc :Record<number,number> = {}

    for (let num of numbers){
        if (acc[`${num}`]){
            acc[`${num}`] = acc[`${num}`] + 1
        }
        else acc[`${num}`] = 1
    }

    return acc;
}

console.log(countFrequancies([4, 7, 2, 7, 4, 9, 4, 1]));