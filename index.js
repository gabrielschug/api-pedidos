// BIBLIOTECAS
const express = require('express')
const app = express()
app.use(express.json())
const uuid = require('uuid') //uuidv4()


//VARIÁVEIS
const PORT = 3000
const ordes = []

// ROTAS
app.get('/order', (request, response) => {
    return response.json({ordes})
})

// LISTEN
app.listen(PORT)