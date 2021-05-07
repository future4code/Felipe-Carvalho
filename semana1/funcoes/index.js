/* Exercicios de interpretação


1. Leia o código abaixo

    ```jsx
    function minhaFuncao(variavel) {
    	return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```

    a) O que vai ser impresso no console?

    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função 
    `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

    Resposta:
    a) 10
       50
    b)por causa do return ficariam armazenados    

2. Leia o código abaixo

    ```jsx
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```

    a. Explique o que essa função faz e qual é sua utilidade

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra`


    Resposta:
    a) ela transforma a palavra cenoura em minusculo e faz uma busca se possui cenoura, 
    sua utilidade é que possa encontrar tanto palavras escritos em minusculo e maiusculo.
    b) true
    true
    true

*/

/* Exercicio 1 */
/* 
function printScreen() {
    console.log("Eu sou Felipe, tenho 27 anos, moro em goiania e sou estudante.");
}

printScreen();


function userInformation() {
    const name = prompt("Informe seu nome: ");
    const years = prompt("Informe sua idade: ");
    const address = prompt("Informe seu endereço: ");
    const job = prompt("Informe sua profissão: ");

    return console.log(`Eu sou ${name}, tenho ${years} anos, moro em ${address} e sou ${job}`)
}

userInformation();

 */


/* Exerccio 2 */

//a
function sum(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

console.log(sum(2, 9));

//b

function isHigher(number1, number2) {
    const higher = number1 >= number2;
    return higher;
}

console.log(isHigher(8, 16));

//c

function isPair(number) {
    const pair = number % 2 === 0;
    return pair;
}

console.log(isPair(16));

//d 

function isString(text) {
    const lengthString = text.length;
    const upperString = text.toUpperCase();
    return console.log(lengthString, upperString);
}

console.log(isString("Fazendo um teste com a frase"))

//3


function operations(number1, number2) {
    const sum = number1 + number2;
    const subtraction = number1 - number2;
    const multiplication = number1 * number2;
    const division = number1 / number2;
    const printScreen = console.log
    (
        `
        Números inseridos: ${number1} e ${number2} 
        Soma: ${sum}
        Diferença: ${subtraction}
        Multiplicação: ${multiplication}
        Divisão: ${division}
        `
        ) 
    return printScreen
}

const numberPrompt1 = prompt("Informe o primeiro número: ");
const numberPrompt2 = prompt("Informe o segundo número: ")
console.log(operations(numberPrompt1, numberPrompt2));