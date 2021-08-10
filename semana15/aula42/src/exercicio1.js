/* exercicio 1 */
//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece? 
// Resposta: Ele da erro antes de compilar
//vermelho, laranja, amarelo, verde, azul, anil e violeta
var COR_DO_ARCO_IRIS;
(function (COR_DO_ARCO_IRIS) {
    COR_DO_ARCO_IRIS["VERMELHO"] = "vermelho";
    COR_DO_ARCO_IRIS["LARANJA"] = "laranja";
    COR_DO_ARCO_IRIS["AMARELO"] = "amarelo";
    COR_DO_ARCO_IRIS["VERDE"] = "verde";
    COR_DO_ARCO_IRIS["AZUL"] = "azul";
    COR_DO_ARCO_IRIS["ANIL"] = "anil";
    COR_DO_ARCO_IRIS["VIOLETA"] = "violeta";
})(COR_DO_ARCO_IRIS || (COR_DO_ARCO_IRIS = {}));
var monica = {
    nome: 'Monica',
    idade: 20,
    corFavorita: COR_DO_ARCO_IRIS.AZUL
};
var bruno = {
    nome: 'Bruno',
    idade: 35,
    corFavorita: COR_DO_ARCO_IRIS.AZUL
};
var rafael = {
    nome: 'Rafael',
    idade: 20,
    corFavorita: COR_DO_ARCO_IRIS.AZUL
};
console.log("hello world");
