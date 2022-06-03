const valores = [7.2, 8.5, 6.3, 9.4]
console.log(valores)
console.log(valores[4]) // Tentar acessar um índice inexistente retorna undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

/**
 * ADICIONA ELEMENTOS AO ARRAY
 */
valores.push({ id: 3 }, null, false, 'teste')
console.log(valores)

/**
 * REMOVE O ÚLTIMO ELEMENTO DO ARRAY
 */
valores.pop()
console.log(valores)

/**
 * REMOVE ELEMENTO A PARTIR DO INDICE
 */
delete valores[4]
console.log(valores)

console.log(typeof valores)