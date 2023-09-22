const express = require('express');
const app = express();
let {people} = require('./data')

// static assets
app.use(express.static('./public'))

/*
Parse form data built in middleware function in express that parses
incoming requests. If you check req.body without it then you will see that the value is undefined.
*/
// HANDLES ANYTHING BUT JSON
app.use(express.urlencoded({extended: false}))
// Parse form data this works similarly to the url encoded but handles the JSON
// HANDLES ONLY JSON
app.use(express.json())

app.use(express.json())

app.get('/api/people', (req, res) => {
    res.json({success: true, data:people})
})


app.post('/api/people', (req, res) => {
    console.log(req.body)
    const {name} = req.body
    // If the new person has a name
    if(name){
        return res.status(201).json({success:true, person: name})
    }
    // If the new person does not have a name
    res.status(404).json({success:false, msg:"Please provide a name"})
})

// Above is for Javascript.html
// Below is for index.html

app.post('/login', (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(200).json({status:200, data: name})
    }
    res.send("Please Provide Credentials")
})

/*
Part 1: Above

The above part brings in the public folder from before and then handles the index and javascript versions. I placed the HS for the form in a seperate js file in the public folder so we can see that load alongside the html. The /api/people can be tested by going to the URL, but the use is in the script.js wnere we call the data with async await.

The get for the api/people is for our testing but then the post will be for the request from the script.js

*/

//Testing Postman:
app.post('/api/postman/people', (req, res) => {
    const {name,id} = req.body;
    let person = {id:id, name:name}
    
    // const {id} = req.body.id;
    const updatedName = {
        name: name,
        id: id
    }
    if(!name){
        return res.status(400).json({data:[], success:false, message: 'Please enter a name'})
    }
    res.status(201).json({success:true, data:[...people,person]})
})

// Put request
app.put('/api/postman/:id', (req, res) =>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res.json({success:false, data:[]})
    }

    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
    res.status(202).json({data: newPeople, success:true})
})

app.delete('/api/people/:id', (req, res) =>{
    const {id} = req.params
    const person = people.find((person)=> person.id === Number(id))

    if(!person){
        return res.status(404).json({success:false, msgl:"No Matching ID Found"})
    }

    people = people.filter((person)=>{
        return person.id !== Number(id)
    })
    res.status(202).json({data:people, success:true})
})

// Server Listen
app.listen(6000, ()=>{
    console.log('Server is listening at Port 6000')
})

