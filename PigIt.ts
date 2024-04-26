export const pigIt = (a : string) : string =>  {
    var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '\'', '"', ',', '<', '.', '>', '/', '?', '`', '~'];
    return a.split(" ").map((e,i)=>{
        return (e.length!==1 && !(specialChars.includes(e)))||(e.length!==1&&i!==a.split(" ").length-1)? e.substring(1,e.length)+ e[0] +"a"+"y":e
    }).join(" ")
  }



  console.log(pigIt('Pig latin is cool'))