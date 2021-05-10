/* 
// Exercicios de interpretação
1. Leia o código abaixo
 ```jsx
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
```

a) O que vai ser impresso no console?
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}

2. Leia o código abaixo

    ```jsx
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```

    a) O que vai ser impresso no console?
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
    Ele copia todo o objeto "cachorro" para o o objeto "gato"

3. Leia o código abaixo

    ```jsx
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    ```

    a) O que vai ser impresso no console?
    false
    undefined
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    a funcao chamava a propriedade que estava na pessoa o primeiro foi false pois quando chamou
    backender ele foi atribuido como um boolean false, o segundo deu undefined pois quando chamou altura
    nao possui altura atribuida no objeto.
*/

// Exercicios de escrita de código:

//1. 
//a) 

const people = {
    name: "Felipe",
    nicknames: ["lipe", "fe", "lips"]
}

function receiveObject(object){
    console.log(`"Eu sou ${object.name}, mas pode me chamar de: ${object.nicknames}."`)
}

receiveObject(people);

//b)

const newNicknames = {
    ...people,
    nicknames: ["Apelido1" , "Apelido2", "Apelido3"]
}

receiveObject(newNicknames);



//2

const people = {
    name: "Felipe",
    age: 27,
    job: "Programador"
}

const people2 = {
    name: "Joaozim",
    age:22,
    job: "fontender"
}

function returnArray(object){
    const arrayObject = [object.name, object.name.length, object.age, object.job, object.job.length];
    return arrayObject ;
}

console.log(returnArray(people));



//3
//a)
const shoppingCart = [];
//b) 
const strawberry = {
    name: "Morango",
    disponibilidade: true,
}

const pineapple = {
    name: "Abacaxi",
    disponibilidade: false,
}

const grape = {
    name: "Uva",
    disponibilidade: true,
}
//c
function fruitsInShoppingCart (object) {
    return shoppingCart.push(object);
    ;
}

fruitsInShoppingCart(strawberry);
fruitsInShoppingCart(pineapple);
fruitsInShoppingCart(grape);
//d
console.log(shoppingCart);


//Desafio1 

function askUser() {
    const name = prompt("Qual o seu nome?");
    const job = prompt("Qual sua profissão?");
    const age = prompt("Qual sua idade?");
    const objectUser = {
        name : name,
        job: job,
        age: age
    }
    console.log(objectUser);
    console.log(typeof objectUser);
}

askUser();