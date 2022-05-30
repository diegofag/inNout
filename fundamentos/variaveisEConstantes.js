/**
 * USAR PREFERENCIALMENTE LET
 */
var a = 3
let b = 4

var a = 30

/*
 * Não permite redeclarar a variável se for com let
 */
// let b = 40
b = 40

console.info(a, b)

a = 3000
b = 4000
console.info(a, b)

const c = 5

/**
 * NÃO PERMITE REATRIBUIR VALOR EM CONSTANTES
 */
// c = 50
console.info(c)