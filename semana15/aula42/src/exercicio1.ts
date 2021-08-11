/* exercicio 1 */
//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece? 
// Resposta: Ele da erro antes de compilar

//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico.
// Como podemos fazer para que essa variável também aceite strings?
// Colocamos o simbolo de ou | : let meuNumero: string | number

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

type pessoa = { nome: string, idade: number, corFavorita: string }

//vermelho, laranja, amarelo, verde, azul, anil e violeta

enum COR_DO_ARCO_IRIS {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const monica: pessoa = {
    nome: 'Monica',
    idade: 20,
    corFavorita: COR_DO_ARCO_IRIS.AZUL
}


const bruno: pessoa = {
    nome: 'Bruno',
    idade: 35,
    corFavorita: COR_DO_ARCO_IRIS.AZUL
}

const rafael: pessoa = {
    nome: 'Rafael',
    idade: 20,
    corFavorita: COR_DO_ARCO_IRIS.AZUL
}


console.log("hello world")


