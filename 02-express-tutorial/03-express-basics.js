const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('User Hit Resource')
    res.status(200).send('Home Page Found')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page Found')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () =>{
    console.log('Listending on http://localhost:5000')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen