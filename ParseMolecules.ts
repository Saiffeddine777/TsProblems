export function parseMolecule(formula:string): Record<string,number> {
    let obj : Record<string , number> ={};
    
    for (let i = 0; i < formula.length; i++) {
        const element = formula[i];
        if  ( isNaN(parseInt(element) )&& !(/[a-z]/.test(element)) &&  !/[\[\]()]/.test(element) ){
            if( /[a-z]/.test(formula[i+1])){
                obj[element+formula[i+1]] = 0 
            }
            else{
                obj[element] = 0
            }
        }
    }


    return obj;
}

console.log(parseMolecule("Ke4[ON(SO3)2]2"))
