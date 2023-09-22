const express = require('express')
const app = express();
const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')
/*
req=> midleware => response
order matters if you place the app.use after the home get, then it won't run on the home get since the response will end before the middleware has a chance to run
app.use(logger)

If you have several middleware then you can call them in an array where again order matters
api/home/products
*/

app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About')
})

app.use('/api', [logger, authorize])
/*This will apply the logger to any path that includes /api as a port of its path 
This is a nice way for you to run a logger on api to stop a certain amount of requests but still allow them on the home and the documentation 
Did way of app.use('/api', logger)

*/

app.get("/api/products", (req, res)=>{
    res.send("Products")
})
app.get("/api/items", (req, res)=>{
    console.log(req.user)
    res.send("items")
})

app.listen(5000, () => {console.log('listening on port 5000')})