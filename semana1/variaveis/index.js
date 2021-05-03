/* 
1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b)

Resposta: 
10
105


2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    let a = 10
    let b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)

    Resposta:
    101010

3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. 
Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. 
Alem disso, os nomes não podem começar com números ou caracteres especiais.

    let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
    let recebeDiario = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${recebeDiario/horasTrabalhadas} por hora`)


*/ 


//exercicio 1

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

// Apareceu como undefined acredito que por nao ter sido declarado 


nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log(typeof nome);
console.log(typeof idade);

// Apareceu como String, acredito que o prompt define como string

console.log("Olá " + nome + " você tem " + idade + " anos");

//Exercicio 2

const pergunta1 = prompt("Você está usando uma camiseta azul?");
const pergunta2 = prompt("Você está com fome?");
const pergunta3 = prompt("Você está de bone?");

console.log("Você está usando uma camiseta azul? " + pergunta1);
console.log("Você está com fome? " + pergunta2);
console.log("Você está de bone? " + pergunta3);

// Exercicio 3

let a = 10;
let b = 25;

/*
valores finais:
a = 25
b = 10
*/

a = b;
let c = 10;
b = c ;

console.log(a , b);

// Desafio 


// 1. O primeiro número somado ao segundo número resulta em: x.
// 2. O primeiro número multiplicado pelo segundo número resulta em: y.

let primeiroNum = prompt("Qual o primeiro numero?");
let segundoNum = prompt("Qual o segundo numero?");

primeiroNum = Number(primeiroNum);
segundoNum = Number(segundoNum);

let x = primeiroNum + segundoNum;
console.log(x);
let y = primeiroNum * segundoNum;
console.log(y);