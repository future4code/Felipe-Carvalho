

//      Exercicios de interpretação
/*  
1) Vai ser impresso no console:

{ nome: "Amanda Rangel", apelido: "Mandi" }
1
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]
{ nome: "Laís Petra", apelido: "Laura" }
2
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]
{ nome: "Letícia Chijo", apelido: "Chijo" }
3
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

2)a)
[ "Amanda Rangel", "Laís Petra", "Letícia Chijo" ]

3)a)
[ "Mandi", "Laura" ]
*/

//          Exercícios de escrita

//1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//a) Criar um array com o nome dos pets
const namePets = pets.map( (item) => {
    return item.nome;
})

console.log(namePets);

//b)
const salsichaPets = pets.filter( (item) =>{
    return  item.raca === "Salsicha";
})

console.log(salsichaPets);

//c 

const arrayPoodle = pets.filter((item) =>{
    return item.raca === "Poodle"
}).map( (item) => {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}` 
})

console.log(arrayPoodle)

//2 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a) array com o nome
const nameArray = produtos.map((item) => {
    return item.nome;
})
console.log(nameArray);
//b array que retorna um objeto com o nome e o desconto
const descontArray = produtos.map((item) => {
    const array = [item.nome, item.preco * 0.95];
    return array
})

console.log(descontArray);

//c array que contenha apenas um objeto da categoria bebidas
const arrayBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
}).map((item) => {
    return item.nome;
})
console.log(arrayBebidas)

//d array com os objetos cujo contenha o nome com a palavra "Ypê"
const arrayYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(arrayYpe)

//e Imprimir array com "Compre [NOME] por [PREÇO]". De Ype
const arrayYpePrice = produtos.filter((item) => {
    return item.nome.includes("Ypê")
}).map((item) => {
    return `compre ${item.nome} por ${item.preco}`
})

console.log(arrayYpePrice);