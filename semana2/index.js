/* 
// Exercícios de interpretação 

//1 - Vai imprimir no console 10

//2 - a) Vai imprimir no console 19, 21, 23, 25, 27, 30
      b) sim, poderia passar dessa forma, usando o indexOf
      const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for(indice of lista){
            console.log(lista.indexOf(indice));
        }
//3 -   *
        **
        ***
        ****
 */

/* 
// Exercicios de escrita
//1

const pet = prompt("Quantos animais de estimação você tem?");

if(pet === 0){
    console.log("Que pena! Você pode adotar um pet!");
}else{
    let arrayPet = [];
    for( i = 1 ; i <= pet; i++ ){ 
        const savePet = prompt(`Informe o nome do seu ${i}º animal de estimação: `);
        arrayPet.push(savePet);
    }
    console.log(arrayPet);
}
 */
//2

const arrayOriginal = [ 0, 2, 4, 6, 8, 10, 11, 13, 15, 17 ];
//a
function printValues() {
    for( indice of arrayOriginal ){
        console.log(indice);
    }
}
printValues()
//b imprime cada um dos valores divididos por 10
function printValuesDivision(){
    for( indice of arrayOriginal){
        console.log(indice / 10);
    }
}
printValuesDivision()
//c Programa que cia um novo array contendo somente os numeros pares
function printArrayPairs(){
    let newArray = [];
    for ( indice of arrayOriginal) {
        if(indice % 2 === 0){
            newArray.push(indice);
        }
    }
    console.log(newArray)
}

printArrayPairs();
//d programa que guarda como strings
function printArrayStrings(){
    let newArray = [];
    for ( i = 0; i < arrayOriginal.length; i++ ) {
        newArray.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
    }
    console.log(newArray)
}

printArrayStrings();
//e imprimir valor maximo e valor minimo
function printValueMinimumMaximum(){
    let valueMaximum ;
    let valueMinimum;
    for( indice of arrayOriginal){
        if(valueMaximum < indice){
            valueMaximum = indice;
        }if(valueMinimum > indice){
            valueMinimum = indice;
        }
    }
    console.log(`O maior número é ${valueMaximum} e o menor é ${valueMinimum}`)
}

printValueMinimumMaximum();