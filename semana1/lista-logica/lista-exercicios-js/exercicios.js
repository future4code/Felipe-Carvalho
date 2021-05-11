
// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
   }
   
   // Exercício 0B
   
   function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')
   
   console.log(mensagem)
   }
   
   // Exercícios
   
   //Exercício 1
   
   function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const height = prompt("Digite a height do retângulo: "); 
   const width = prompt("Digite a widthra do retângulo: ");
   return console.log(height * width);
   }
   
   //Exercício 2
   
   function imprimeIdade() {
   // implemente sua lógica aqui
   const year = prompt("Digite o seu ano atual: ");
   const yearBirth = prompt("Digite seu ano de nascimento: ");
   return console.log(year - yearBirth);
   }
   
   //Exercício 3
   
   function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   return peso / (altura * altura);
   }
   
   //Exercício 4
   
   function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const nome = prompt("Informe seu nome: ");
   const idade = prompt("Informe sua idade: ");
   const email = prompt("Informe o seu email: ");
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
   }
   
   //Exercício 5
   
   function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   const coresFavoritas = [];
   const cor1 = prompt("Digite a primeira de suas três cores favoritas: ");
   const cor2 = prompt("Digite a primeira de suas três cores favoritas: ");
   const cor3 = prompt("Digite a primeira de suas três cores favoritas: ");
   coresFavoritas.push(cor1);
   coresFavoritas.push(cor2);
   coresFavoritas.push(cor3);
   return console.log(coresFavoritas);
   }
   
   //Exercício 6
   
   function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   return string.toUpperCase();
   }
   
   //Exercício 7
   
   function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return custo / valorIngresso;
   
   }
   
   // Exercício 8
   
   function checaStringsMesmoTamanho(string1, string2) {
   // implemente sua lógica aqui
   return string1.length === string2.length;
   }
   
   // Exercício 9
   
   function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   return array[0];
   }
   
   // Exercício 10
   
   function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   return array[array.length -1];
   }
   
   //Exercício 11
   
   function trocaPrimeiroEUltimo(array) {
      // implemente sua lógica aqui
      let aux = 0
      aux = array[0]
      array[0] = array[array.length-1]
      array[array.length-1] = aux
      return array
   }

   // Exercício 12
   
   function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
      const stringCompara1 = string1.toLowerCase();
      const stringCompara2 = string2.toLowerCase();
      return stringCompara1 === stringCompara2;
   }
   
   // Exercício 13
   
   function checaRenovacaoRG() {
   // implemente sua lógica aqui
      const anoAtual = prompt("Informe o ano atual: ");
      const anoNascimento = prompt("Informe ano de nascimento: ");
      const anoEmissao = prompt("Ano que sua carteira de identidade foi emitida: ");
      const idade = anoAtual - anoNascimento;
      const idadeCartao = anoAtual - anoEmissao;
      const resultado = (idade <= 20 && idadeCartao >= 5 || idade <= 50 && idadeCartao >= 10 || idade > 50 && idadeCartao >= 15); 
      return console.log(resultado);

   }
   
   // Exercício 14
   
   function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
      const result = (ano % 400 === 0) || ((ano % 4 === 0) && !(ano % 100 === 0))
      return result
   }
   
   // Exercício 15
   
   function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
      const idade = prompt("Você tem mais de 18 anos?");
      const ensinoMedio = prompt("Você possui ensimo medio completo?");
      const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horarios do curso?");
      const resultado = ( idade === "sim" && (ensinoMedio === "sim") && (disponibilidade === "sim"));
      console.log(resultado);
   }
   