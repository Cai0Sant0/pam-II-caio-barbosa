// APRENDENDO SOBRE FUNÇÕES 

let num1 = 2;
const num2 = 3;
var msg = "Olá amigos! Esse é o número: ";

console.log( msg + num1);
console.log( num1 + num2);
console.log( typeof(num1));
console.log( typeof(msg));

console.log(`O número é ${num1}`);

function somar (){
    let n1 = 2;
    let n2 = 5;
    console.log("O resultado é: ", n1 + n2);
}

somar();

function somarComParametros(n1,n2){
    let resultado = `O resultado de ${n1} mais ${n2} é ${n1+n2}`;
    console.log(resultado);
}

somarComParametros(10,20);

let teste =(n)=>{
    let resultado = n%2;

    if(resultado == 1){
        return "Número impar";
    }

    return "Número par";
}

console.log(teste(2));
console.log(teste(3));
// teste(1)  Esse não executa uma visualização