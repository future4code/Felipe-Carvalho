/*  Interpretação

1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    ```jsx
    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log**('f. ', valor)**
    ```

Resposta:
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 10

2. Leia o código abaixo com atenção 

    ```jsx
    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    ```

    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

Resposta:

SUBI NUM ÔNBUS EM MIRROCOS 26 

*/


/* // Exercicio 1

const name = prompt("Informe seu nome: ");
const email = prompt ("Informe o seu email: ");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${email}!`)


// Exercicio 2


const food = ["lasanha", "sanduiche", "pizza", "churrasco", "frango"];
console.log(food);
const foodUser = prompt("Qual a sua comida favorita? ");
food[1] = foodUser;
console.log(food);


// Exercicio 3

const listaDeTarefas = [];
console.log(listaDeTarefas)
const task1 = prompt('Cite tres tarefas que você precisa relizar no seu dia-a-dia, primeira tarefa: ');
const task2 = prompt("Segunda tarefa: ");
const task3 = prompt("Terceira tarefa: ");

listaDeTarefas.push(task1, task2, task3);
console.log(listaDeTarefas);
const numberTask = prompt("Informe o número de uma tarefa já realizada: ");
listaDeTarefas.splice(numberTask - 1, 1);
console.log(listaDeTarefas); 

// Desafio 1 

const phrase = prompt("Digite uma frase: ").split(" ");
console.log(phrase);


// Desafio 2


const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

console.log(`O índice de abacaxi é: ${fruits.indexOf("Abacaxi")} o tamanho da array é ${fruits.length}`);
*/