const prod1 = {}
prod1.nome = 'Nome do cara'
prod1.cpf = 75049309701
prod1['Tipo do Sangue'] = 'O+' // Evitar chave de acesso com espaco

console.log(prod1)

const prod2 = {
    nome: 'Nome',
    cpf: 75049309701,
    tipoSangue: {
        sangue1: '0+',
        sangue2: 'AB+'
    }
}

console.log(prod2)