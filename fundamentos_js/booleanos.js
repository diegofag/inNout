isAtivo = true
console.info(isAtivo)

isAtivo = 1
console.info(isAtivo)

console.info('Os verdadeiros...')
console.info(!!3)
console.info(!!-1)
console.info(!!' ')
console.info(!![])
console.info(!!{})
console.info(!!Infinity)
console.info(!!(isAtivo = Infinity))

console.info('Os falsos...')
console.info(!!0)
console.info(!!'')
console.info(!!null)
console.info(!!undefined)
console.info(!!NaN)
console.info(!!(isAtivo = false))

console.info('Para finalizar...')
console.info(!!'' || null || 0 || 'Verdadeiro') // Imprime o primeiro valor verdadeiro

let nome = ''
console.info(nome || 'Desconhecido') // Valida e atribui um valor padrão para a variável