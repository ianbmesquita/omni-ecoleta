import express from 'express'

import ItemsController from './controllers/ItemsController'
import PointsController from './controllers/PointsController'

const routes = express.Router()
const itemsController = new ItemsController()
const pointsController = new PointsController()

routes.get('/', (request, response) => {
    return response.json('Servidor conectado na porta 3333...')
})

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show) 

export default routes