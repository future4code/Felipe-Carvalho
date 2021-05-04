/*1. Leia o código abaixo. Indique todas as mensagens impressas no console, 
**SEM EXECUTAR o programa**.

    ```jsx
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado)
    ```
    Resposta:


    a.  false
    b.  false
    c.  true
    d.  boolean
    

2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

    ```jsx
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
    ```

    Resposta:
    vai concatenar duas string


3. Para o exercício anterior, sugira ao seu colega uma solução 
para que o valor impresso no console seja, de fato, a soma dos dois números.
    
    Resposta:

    const soma = Number(primeiroNumero) + Number(segundoNumero)
*/ 





//1
const idade = prompt("Qual a sua idade?");
const idadeAmigo = prompt("Qual a idade do seu melhor amigo?");

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo);
const diferenca = Number(idade) - Number(idadeAmigo);
console.log(diferenca);

//2

const par = prompt("Insira um número par: ");
console.log(par % 2); 
// resultado sempre 0, se o usuatio informar um numero impar vai aparecer o resto da divisão

//3
const idade = prompt("Quantos anos você tem?");

console.log("Idade em meses: ", idade * 12);
console.log("Idade em dias: ", idade * 12 * 30);
console.log("Idade em horas: ", idade * 12 * 30 * 24);

//4
let numero1 = prompt("Informe o primeiro numero: ");
let numero2 = prompt("Informe o segundo numero: ");

numero1 = Number(numero1);
numero2 = Number(numero2);

console.log("Você informou os seguintes numeros: ", numero1 , numero2);
console.log("O primeiro numero é maior que segundo? ", numero1 > numero2);
console.log("O primeiro numero é igual ao segundo? ", numero1 === numero2);
console.log("O primeiro numero é divisível pelo segundo? ", (numero1 % numero2)=== 0);
console.log("O segundo numero é divisível pelo primeiro? ", (numero2 % numero1) === 0);
