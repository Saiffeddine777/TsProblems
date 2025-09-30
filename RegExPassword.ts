// function testPassword (str:string):boolean{
//   const REGEXP :RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])[a-zA-Z1-9]{6,}$/
//   return REGEXP.test(str)
// }

export function ipsBetween(start: string, end: string): number {
  const startArr: number[] = start.split(".").map((e) => parseInt(e));
  const endArr: number[] = end.split(".").map((e) => parseInt(e));

  return 1;
}

ipsBetween("10.0.0.0", "10.0.0.50");

export function rgb(r: number, g: number, b: number): string {
  const convertOneNum: (n: number) => string = (n) => {
    n= Math.max(0, Math.min(255 , n))
    const chars :string = n.toString(16).toUpperCase()
    return chars.length <=1? "0" + chars : chars  
  };

  return convertOneNum(r) + convertOneNum(g) + convertOneNum(b);
}
