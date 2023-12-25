import { Request, Response } from "express"

require('dotenv').config()
import sequelize from './api/db'
import express from 'express'
import models from './api/models/index'
import fileUpload from 'express-fileupload'
import path from 'path'
import cors from 'cors'
import router from './api/routes/index'
import errorHandler from './api/middleware/errorHandle'

const IS_DEV = process.env.NODE_ENV === 'dev'
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use('/static', express.static(path.resolve(import.meta.dir, './static')))
app.use(fileUpload({}))
app.use('/vote2024/api', router)
app.get('/vote2024/api', (req: Request, res: Response) => {
  return res.json({message: "api"})
})

// errors
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    await models.Picture.findAll()
    app.listen(PORT, () => {console.log(`server started on port ${PORT}`)})
  } catch (e) {
    console.log(e);
  }
}

start()

export default app