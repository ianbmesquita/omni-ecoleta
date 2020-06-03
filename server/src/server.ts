import express from 'express'

const app = express()

app.get('/', (request, response) => {
    console.log('Listagem de usuários')

    response.json('Servidor conectado na porta 3333...')
})

app.listen(3333)