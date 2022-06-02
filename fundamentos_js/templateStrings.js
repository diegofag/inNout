const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.info(concatenacao, template)

// Expressões...
console.info(`1 + 1 = ${1 + 1}`)

// Funções...
const up = texto => texto.toUpperCase()
console.info(`Ei... ${up('cuidado')}!`)