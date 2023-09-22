const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req,res)=>{
    res.send(`<h1> Home Page</h1><a href = "/api/products">Products</a>`);
})

// Returns All Prodcuts

app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product) =>{
        const {id, name, age} = product;
        return {id, name, age}
    })
    res.json(newProducts);
})

// This is how you set up programs 

app.get('/api/products/:productID', (req, res)=>{
    console.log(req.params)
    const {productID} = req.params;
    const singleProduct = products.find(
        (product)=>product.id === Number(productID)
    )
    if(!singleProduct){
        return res.status(404).send("Product Does Not Exist")
    }
    return res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params)
    res.send("This product has been reviewed by a person: Its the best there is 10/10 would buy again!")
})


app.get('/api/v1/query', (req, res)=>{
    console.log(req.query)
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 2){
        return res.status(200).json({success:true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{
    console.log('Server is listening on Port 5000')
})

// 