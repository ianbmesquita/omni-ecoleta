import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import { errors } from 'celebrate'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/image', express.static(path.resolve(__dirname, '..', 'assets', 'images')))
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'assets', 'uploads')))

app.use(errors())

app.listen(3333)