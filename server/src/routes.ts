import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json('Servidor conectado na porta 3333...')
})

export default routes