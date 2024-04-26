function testPassword (str:string):boolean{
  const REGEXP :RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])[a-zA-Z1-9]{6,}$/
  return REGEXP.test(str)
}



console.log(testPassword("fjd3IR9")) //output :true
console.log(testPassword("DSJKHD23")) //output :false