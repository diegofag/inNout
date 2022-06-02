const escola = 'Cod3r'

console.info(escola.charAt(4))
console.info(escola.charAt(5))
console.info(escola.charCodeAt(3))

console.info(escola.indexOf('3'))

console.info(escola.substring(1))
console.info(escola.substring(0, 3))

console.info('Escola '.concat(escola).concat("!"))
console.info('Escola ' + escola + "!")
console.info(escola.replace(3 /*TBM PODE SER USADO REGEX*/ , 'e'))

/**
 * CRIA UM ARRAY
 */
console.info('Ana, Maria, Pedro'.split(',')) // Pode ser com regEx tbm /,/