const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])

console.log(`A soma dos números é ${num1+num2}`)

// Comando: node somarDoisNumeros.js 1 2 batata
// Array: ["caminho do node", "caminho do arquivo", "1", "2", "batata"]

// console.log("Array process", process.argv)

// process.argv[0] SEMPRE VALE o próprio node (string com o caminho dele)
// process.argv[1] SEMPRE VALE o caminho do arquivo que o node vai rodar
// Portanto, process.argv[0] e process.argv[1] sempre estão ocupados

// Nossos valores começam a aparecer no índice 2
