function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let pesoP1 = p1 * 2; 
  let pesoP2 = p2 * 3;
  let pesoEx = ex * 1;
  
  let media = (pesoP1 + pesoP2 + pesoEx) / 6;
  let nota;
  if(media >=9){
    nota = "A";
  }else if(media < 9 && media >= 7.5){
    nota =  "B";
  }else if(media < 7.5 && media >= 6){
    nota =  "C";
  }else{
    nota =  "D";
  }
  return nota;
}