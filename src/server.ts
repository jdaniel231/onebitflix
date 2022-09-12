import express from 'express'
import { sequelize } from './database'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB conexao sucessido')
  })
  console.log(`Servidor iniciado com sucesso! port ${PORT}`)
})