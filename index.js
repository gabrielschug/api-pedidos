// IMPORTS
const express = require('express')
const app = express()
app.use(express.json())
const uuid = require('uuid')


// VARIABLES
const PORT = 3000
const orders = []


// MIDDWARE
const checkOrderId = (request, response, next) => {

    const {id} =request.params

    const index = orders.findIndex(order => order.id === id)
    if (index < 0) {
        return response.json({error: "Order not found."})    
    }

    request.orderIndex = index
    request.orderId = id

    next()
}


// ROUTES
app.get('/order', (request, response) => {
    return response.json(orders)
})

app.get('/order/:id', checkOrderId, (request, response) => {

    const index = request.orderIndex

    return response.json(orders[index])
})

app.post('/order', (request, response) => {
    
    const {order, clientName, price} = request.body
    
    const newOrder = {id:uuid.v4(), order, clientName, price}

    orders.push(newOrder)
    
    return response.status(201).json(newOrder)
})

app.put('/order/:id', checkOrderId, (request, response) => {

    const id = request.orderId
    const index = request.orderIndex
    
    const {order, clientName, price} = request.body
    
    const updateOrder = {id, order, clientName, price} 

    orders[index] = updateOrder

    return response.json(orders[index])
})

app.delete('/order/:id', checkOrderId, (request, response) => {

    const {index} =request.orderIndex
    
    orders.splice(index,1)

    return response.json({message:"The order was deleted successfully."})
})


// LISTEN
app.listen(PORT)