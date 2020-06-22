import express from 'express'
import multer from 'multer'
import multerConfig from './configurations/multer'

import ItemsController from './controllers/ItemsController'
import PointsController from './controllers/PointsController'

const routes = express.Router()
const upload = multer(multerConfig)

const itemsController = new ItemsController()
const pointsController = new PointsController()

routes.get('/', (request, response) => {
    return response.json('Servidor conectado na porta 3333...')
})

routes.get('/items', itemsController.index)

routes.post('/points', upload.single('image'), pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show) 

export default routes