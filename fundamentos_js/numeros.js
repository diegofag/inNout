const peso1 = 1.0
const peso2 = Number('2.0')

console.info(peso1, peso2)
console.info(Number.isInteger(peso1))
console.info(Number.isInteger(peso2))

const avaliacao1 = 7.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.info(media.toFixed(2))
console.info(media.toString(2)) // binário
console.info(typeof media)
console.info(typeof Number)