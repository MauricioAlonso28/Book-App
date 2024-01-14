import express from 'express'
import morgan from 'morgan'

import booksRouter from './routes/books.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use(booksRouter)

export default app