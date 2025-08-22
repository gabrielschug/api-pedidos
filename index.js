// BIBLIOTECAS
const express = require('express')
const app = express()
app.use(express.json())
const uuid = require('uuid') //uuidv4()


//VARIÁVEIS
const PORT = 3000
const orders = []

// ROTAS
app.get('/order', (request, response) => {
    return response.json(orders)
})
app.get('/order/:id', (request, response) => {

    const {id} =request.params

    console.log(`Retornando id:${id}`)
    const index = orders.findIndex(order => order.id === id)
    if (index < 0) {
        return response.json({error: "Order not found."})    
    }

    console.log(`Retornando index: ${orders[index]}`)

    return response.json(orders[index])
})

app.post('/order', (request, response) => {
    
    const {order, clientName, price} = request.body
    
    const newOrder = {id:uuid.v4(), order, clientName, price}

    orders.push(newOrder)
    
    return response.status(201).json({newOrder})
})

app.put('/order/:id', (request, response) => {

    const {id} =request.params

    const {order, clientName, price} = request.body

    const index = orders.findIndex(order => order.id === id)
    if (index < 0) {
        return response.json({error: "Order not found."})    
    }

    const updateOrder = {id, order, clientName, price} 

    orders[index] = updateOrder


    console.log(`Retornando index: ${orders[index]}`)

    return response.json(orders[index])
})


app.delete('/order/:id', (request, response) => {

    const {id} =request.params
    const index = orders.findIndex(order => order.id === id)
    
    if (index < 0) {
        return response.json({error: "Order not found."})    
    }
    
    orders.splice(index,1)

    return response.json({message:"The order was deleted successfully."})
})




// LISTEN
app.listen(PORT)
console.log("🌐 Server is online")