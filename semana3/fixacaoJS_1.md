function calculaSalario(carrosVendidos, valorVendas) {
  // Escreva seu código aqui
  const carrosVendidos = Number(prompt("Informe seu número de carros vendido: "));
  const valorVendas = Number(prompt("Informe o valor total de suas vendas por mes: "));
  return 2000 + (carrosVendidos * 100) + (valorVendas * 0.05);
}