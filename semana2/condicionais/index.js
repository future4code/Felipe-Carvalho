/* 
// Exercicios de interpretação 

1. Leia o código abaixo:

    
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```

    a) Explique o que o código faz. Qual o teste que ele realiza? 
Resposta:
    O teste confirma o resultado do resto de um divisão, caso seja 0 ele diz que passou no teste 
    caso nao ele passa para o loop que nao passou no teste.

    b) Para que tipos de números ele imprime no console "Passou no teste"? 
Resposta:
    Para números pares
    c) Para que tipos de números a mensagem é "Não passou no teste"?
Resposta:
    Para números ímpares

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

   
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```

    a) Para que serve o código acima?
Resposta:
    Ele verifica se é  alguma das frutas e caso seja ele inprime na tela o preço e nome da fruta e caso não seja ele imprime como 5.
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
Resposta:
    O preço da fruta Maçã é R$ 2.25.
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
Resposta: 
    Ele não pararia o loop e o preço começaria a valer 5.

3. Leia o código abaixo:

    
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)
    ```

    a) O que a primeira linha está fazendo?
Resposta:
    Pedindo para que um usuário digite um número.
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Resposta:
    Caso fosse 10:
    Esse numero passou no teste
    Um erro 

    Caso fosse -10:
    Um erro
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Resposta:
    Sim pois a mensagem nao poderia ser vista de fora por ter sido declarada dentro do escopo, para isso ela precisaria ser declarada antes.


*/


/* 
//Exercicios de escrita

//1
//a)
const age = prompt("Me informe a sua idade: ");
//b)
const numberAge = Number(age);
//c)
if(numberAge >= 18){
    console.log("Você pode dirigir");
} else{
    console.log("Você não pode dirigir");
}

//2 Programa que verifica o turno do aluno
const shift = prompt(`Me informe o seu turno(caso matutino: "M", caso verpertino: "V", caso noturno: "N"): `);

if(shift === "M"){
    console.log("Bom dia!");
} else if(shift === "V"){
    console.log("Boa tarde!");
}else if(shift === "N"){
    console.log("Boa noite!")
}else{
    console.log(`Por informe como caso matutino: "M", caso verpertino: "V", caso noturno: "N"`)
}


 //3 Mesmo programa switch case
 switch(shift) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Bom tarde!")
        break
    case "N":
        console.log("Bom noite!")
        break      
    default:
        console.log(`Por informe como caso matutino: "M", caso verpertino: "V", caso noturno: "N"`)
        break
 }



const genreMovie = prompt("Qual o gênero do filme?");
const ticketPrice = prompt("Qual o preço do filme?");

if(genreMovie === "fantasia" && ticketPrice <= 15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}

// Desafio
// 1)

const genreMovie = prompt("Qual o gênero do filme?");
const ticketPrice = prompt("Qual o preço do filme?");

if(genreMovie === "fantasia" && ticketPrice <= 15){
    const littleSnack = prompt("Qual lanchinho você vai comprar(pipoca, chocolate, doces, etc)?")
    console.log("Bom filme!");
    console.log(`Aproveite o seu ${littleSnack}`);
}else{
    console.log("Escolha outro filme :(")
}
*/

//2 
const fullName = prompt("Qual seu nome completo? ");
const typeGame = prompt("Qual tipo de jogo(IN indica internacional e DO indica doméstico)?");
const stepGame = prompt("Qual a etapa do jogo(SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final)?");
const category = prompt("Infome as opções de categoria 1,2,3 ou 4:");
const quantityTicket = prompt("Qual a quantidade de ingressos?");
//valores do ingresso nacional
const SfCategory1 = 1320.00
const SfCategory2 = 880.00
const SfCategory3 = 550.00
const SfCategory4 = 220.00

const DtCategory1 = 660.00
const DtCategory2 = 440.00
const DtCategory3 = 330.00
const DtCategory4 = 170.00

const FiCategory1 = 1980.00
const FiCategory2 = 1320.00
const FiCategory3 = 880.00
const FiCategory4 = 330.00



if(stepGame === "SF" &&  typeGame === "DO" && category === "1"){//nacionais
    console.log(
        `---Dados da compra--- 
        Nome do cliente:  ${fullName} 
        Tipo do jogo:  Nacional
        Etapa do jogo:  Semi Finais
        Categoria:  ${category}
        Quantidade de Ingressos:  ${quantityTicket} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${SfCategory1}
        Valor total:  R$ ${SfCategory1 * quantityTicket}`
        )
    }else if(stepGame === "SF" &&  typeGame === "DO" && category === "2"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Semi Finais
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${SfCategory2}
                Valor total:  R$ ${SfCategory2 * quantityTicket}`
                )
        }else if(stepGame === "SF" &&  typeGame === "DO" && category === "3"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Semi Finais
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${SfCategory3}
                Valor total:  R$ ${SfCategory3 * quantityTicket}`
                )
        }else if(stepGame === "SF" &&  typeGame === "DO" && category === "4"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Semi Finais
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${SfCategory4}
                Valor total:  R$ ${SfCategory4 * quantityTicket}`
                )
        }else if(stepGame === "DT" &&  typeGame === "DO" && category === "1"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Decisão do 3º lugar
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${DtCategory1}
                Valor total:  R$ ${DtCategory1 * quantityTicket}`
                )
        }else if(stepGame === "DT" &&  typeGame === "DO" && category === "2"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Decisão do 3º lugar
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${DtCategory2}
                Valor total:  R$ ${DtCategory2 * quantityTicket}`
                )
        }else if(stepGame === "DT" &&  typeGame === "DO" && category === "3"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Decisão do 3º lugar
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${DtCategory3}
                Valor total:  R$ ${DtCategory3 * quantityTicket}`
                )
        }else if(stepGame === "DT" &&  typeGame === "DO" && category === "4"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Decisão do 3º lugar
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${DtCategory4}
                Valor total:  R$ ${DtCategory4 * quantityTicket}`
                )
        }else if(stepGame === "FI" &&  typeGame === "DO" && category === "1"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Final
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${FiCategory1}
                Valor total:  R$ ${FiCategory1 * quantityTicket}`
                )
        }else if(stepGame === "FI" &&  typeGame === "DO" && category === "2"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Final
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${FiCategory2}
                Valor total:  R$ ${FiCategory2 * quantityTicket}`
                )
        }else if(stepGame === "FI" &&  typeGame === "DO" && category === "3"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Final
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${FiCategory3}
                Valor total:  R$ ${FiCategory3 * quantityTicket}`
                )
        }else if(stepGame === "FI" &&  typeGame === "DO" && category === "4"){
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Nacional
                Etapa do jogo:  Final
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${FiCategory4}
                Valor total:  R$ ${FiCategory4 * quantityTicket}`
                )
        }else if(stepGame === "SF" &&  typeGame === "IN" && category === "1"){//internacionais
            console.log(
                `---Dados da compra--- 
                Nome do cliente:  ${fullName} 
                Tipo do jogo:  Internacional
                Etapa do jogo:  Semi Finais
                Categoria:  ${category}
                Quantidade de Ingressos:  ${quantityTicket} ingressos 
                ---Valores--- 
                Valor do ingresso:  R$ ${SfCategory1 * 4.1}
                Valor total:  R$ ${SfCategory1 * 4.1 * quantityTicket}`
                )
            }else if(stepGame === "SF" &&  typeGame === "IN" && category === "2"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Semi Finais
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${SfCategory2 * 4.1}
                        Valor total:  R$ ${SfCategory2 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "SF" &&  typeGame === "IN" && category === "3"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Semi Finais
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${SfCategory3 * 4.1}
                        Valor total:  R$ ${SfCategory3 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "SF" &&  typeGame === "IN" && category === "4"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Semi Finais
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${SfCategory4 * 4.1}
                        Valor total:  R$ ${SfCategory4 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "DT" &&  typeGame === "IN" && category === "1"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Decisão do 3º lugar
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${DtCategory1 * 4.1}
                        Valor total:  R$ ${DtCategory1 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "DT" &&  typeGame === "IN" && category === "2"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Decisão do 3º lugar
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${DtCategory2 * 4.1}
                        Valor total:  R$ ${DtCategory2 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "DT" &&  typeGame === "IN" && category === "3"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Decisão do 3º lugar
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${DtCategory3 * 4.1}
                        Valor total:  R$ ${DtCategory3 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "DT" &&  typeGame === "IN" && category === "4"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Decisão do 3º lugar
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${DtCategory4 * 4.1}
                        Valor total:  R$ ${DtCategory4 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "FI" &&  typeGame === "IN" && category === "1"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Final
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${FiCategory1 * 4.1}
                        Valor total:  R$ ${FiCategory1 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "FI" &&  typeGame === "IN" && category === "2"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Final
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${FiCategory2 * 4.1}
                        Valor total:  R$ ${FiCategory2 * 4.1 * quantityTicket}`
                        )
                }else if(stepGame === "FI" &&  typeGame === "IN" && category === "3"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Final
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${FiCategory3 * 4.1}
                        Valor total:  R$ ${FiCategory3 * quantityTicket}`
                        )
                }else if(stepGame === "FI" &&  typeGame === "IN" && category === "4"){
                    console.log(
                        `---Dados da compra--- 
                        Nome do cliente:  ${fullName} 
                        Tipo do jogo:  Internacional
                        Etapa do jogo:  Final
                        Categoria:  ${category}
                        Quantidade de Ingressos:  ${quantityTicket} ingressos 
                        ---Valores--- 
                        Valor do ingresso:  R$ ${FiCategory4 * 4.1}
                        Valor total:  R$ ${FiCategory4 * 4.1 * quantityTicket}`
                        )
                }else{
                    console.log("Algo nao foi informado por favor faça novamente")
                }
