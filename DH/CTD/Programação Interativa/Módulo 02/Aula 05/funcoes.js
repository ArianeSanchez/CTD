// função declarada
function darOi() {
    console.log("Olá tudo bem?");
}

darOi();

//função expressa
let somar = function(){
    console.log(1+1);
}

somar();

let somarVariaveis = function(num1,num2){
    console.log(num1+num2);
}

somarVariaveis(1,2);

let somarReturn = function(num1,num2){
    return num1+num2;
}

//let resultado = somarReturn(2,2);
//console.log(resultado);

function multiplicar(num1,num2){
    let resultado = num1*num2;
    console.log("resultado dentro da função =", resultado);
}

let resultado = 0;
console.log("resultado fora da função =", resultado);

multiplicar(2,2);

//escopo global X escopo local

