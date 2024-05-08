const TesteImparPar =(n)=>{

    let calculoTeste = n%2;
    
    return (calculoTeste==1)? "Número Impar": "Número Par";

    // if(calculoTeste == 1){
    //     return "Número Impar"
    // }

    // return "Número Par"
}

console.log(TesteImparPar(17));
console.log(TesteImparPar(64));
console.log(TesteImparPar(1500));