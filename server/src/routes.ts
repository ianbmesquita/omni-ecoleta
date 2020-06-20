import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json('Servidor conectado na porta 3333...')
})

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.name,
            image_url: `http://localhost:3333/image/${item.image}`
        }
    })

    return response.json(serializedItems)
})

export default routes