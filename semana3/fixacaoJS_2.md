function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let total;
  if(quantidade >= 12){
    total = quantidade;
  }else{
    let maca = 1.30
    total = quantidade * maca; 
  }
  return total;
}