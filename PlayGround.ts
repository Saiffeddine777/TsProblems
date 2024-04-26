

export function humanReadable(seconds:number):string {
         if (!seconds){
            return "00:00:00"
         }
        const hours :number = seconds / 3600
        const rest :number  = seconds % 3600
        const minutes:number = rest / 60
        const restSeconds :number = rest % 60
        const str: string = `${hours<100&&hours>=10?Math.floor(hours):hours<10?`0${Math.floor(hours)}`:99}:${Math.floor(minutes)<10?`0${Math.floor(minutes)}`:Math.floor(minutes)}:${Math.round(restSeconds)<10?`0${Math.round(restSeconds)}`:Math.round(restSeconds)}`
        return str
  }

//   Devil's Sequence
//   Problem
//   Robodevil likes to do some mathematics between rehearsals of his orchestra. Today he invented devilish sequence No. 1729:
//   x0 = 0, 
//   x1 = 1,
//   xn = (xn - 1 + xn - 2) / 2.
//   For example, x10 = 0.666015625. Robodevil became interested at once how many `sixes` there were at the beginning of an arbitrary xn. In 6 nanoseconds, he had a formula. Can you do the same?
//   Input
//   You are given an integer n; `2 ≤ n ≤ 100000`.
//   Output
//   Output the number of sixes at the beginning of xn in decimal notation.
//   Example
  

//  x0 = 0,
// x1 = 1,
// x2 = (x(1) + x(0)) / 2 = 0.5
// x3 = (x(2) + x(1)) /2 = 0.75
// xn = (xn - 1 + xn - 2) / 2.



export function countSixes1(n: number): number {
    const getNumberOfSixes: (num: BigInt) => number = (num) => String(num).split("").filter((e: string) => e === '6').length;
    const xn: (xn_1: BigInt, xn_2: BigInt) => BigInt = (xn_1, xn_2) => {
        let sum = (xn_1 as any) + (xn_2 as any);;
        return sum / BigInt(2);
    }
    let xn_1: BigInt = BigInt(1), xn_2: BigInt = BigInt(0), time: number = 2;
    let result: BigInt = xn(xn_1, xn_2);
    let prev: BigInt = xn_1;

    while (time <= n) {
        let keep: BigInt = result;
        result = xn(result, prev);
        prev = keep;
        time++;
    }
    return getNumberOfSixes(result);
}






export function countSixes(n:number):number{
    let xn_1 = 1 , xn_2 =0 ,xn = 0
    for (let i = 2 ; i<=n ;i++){
        xn = (xn_1+xn_2)/2
        let keep = xn_1
        xn_1=xn;
        xn_2=keep;
    }

    const xstr =  xn.toString().substring(2);
    let count = 0;
    let it = 0;
    while(it<xstr.length){
        xstr[it]==="6"?count++:undefined
        it++
    }



   
    return count;
}


console.log(Math.LN10)



  