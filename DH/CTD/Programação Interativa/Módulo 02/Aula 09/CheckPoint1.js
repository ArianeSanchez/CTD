/* Grupo 07 Ariane Sanchez - Josemar Nascimento - Emanuel Nogueira - Kristy Godoy - Tiago Silva - Matheus Henrique
*/

/*
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

let Pipoca = 10;
let Macarrão = 8;
let Carne = 15;
let Feijão = 12;
let Brigadeiro = 8;

    function microondas (prato,tempo){ 
        
        switch (prato){
        
        case 'Pipoca':
            prato = Pipoca
            break
        case 'Macarrão':
            prato = Macarrão
            break
        case 'Carne':
            prato = Carne
            break
        case 'Feijão':
            prato = Feijão
            break
        case 'Brigadeiro':
            prato = Brigadeiro
            break
        default:
            console.log("Prato Inexistente!/PIpiPIII")
            break}

        if(tempo>=prato && tempo<prato*2){
            console.log("Prato pronto, bom apetite!!!/PIpiPIII")
        }else if(tempo<prato){
            console.log("Tempo insuficiente/PIpiPIII")
        }else if(tempo>=prato*2&&tempo<=prato*3){
            console.log("O prato queimou/PIpiPIII")
        }else if(tempo>=prato*3){
            console.log("Kabummmmmmm/PIpiPIII")
        }
    }

/*Entrar sempre com um valor (texto, número, etc), e não com uma variável, a menos que a variável receba um input antes*/        
microondas('Pipoca',5)