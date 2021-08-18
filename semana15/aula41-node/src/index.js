const countries = require("./countries")
// console.table(countries)

// Texto da busca
const query = process.argv[2].toLowerCase()

// const result = countries.filter((country) => {
//     return country.name.toLowerCase().includes(query)
// })

const result = countries.filter(country => country.name.toLowerCase().includes(query))

console.table(result)