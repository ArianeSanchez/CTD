//Calculadora - Nível1
function adicao(x,y){
    console.log(x+y);
}

function subtracao(x,y){
    console.log(x-y);
}

function multiplicacao(x,y){
    console.log(x*y);
}

function divisao(x,y){
    console.log(x/y);
}

//Calculadora - Nível2
console.log ('-------------- Teste de Operações / Calculadora --------------')

adicao (2,2);
subtracao (4,2);
multiplicacao (4,2);
divisao (4,2);
divisao (4,0);

//Calculadora - Nível3
function quadradoDoNumero(x){
    console.log(multiplicacao(x,x))
}

quadradoDoNumero (2)

function mediaDeTresNumeros(x,y,z){
    console.log(divisao((x+y+z),3))
}

mediaDeTresNumeros (2,4,6)

function calculaPorcentagem(x,y){
    console.log (divisao(multiplicacao(x,y),100))
}

//console.log(calculaPorcentagem(300,15))
