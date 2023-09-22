const http = require('http');
const path = require('path');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync(path.join(__dirname, '/public/index.html'))
const homeStyles = readFileSync(path.join(__dirname, '/public/styles.css'))
const homeImage = readFileSync(path.join(__dirname, '/public/logo.svg'))
const homeLogic = readFileSync(path.join(__dirname, '/public/browser_app.js'))

const server = http.createServer((req, res) => {
    const url = req.url
    console.log(url)
    // Homepage
    if(url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>Home Page of Ethan</h1>')
        res.end()
    }
    // about page
    else if(url == '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>About page of Ethan</h1>')
        res.end()
    }
    else if(url == '/styles.css'){
        res.writeHead(200, {'Content-Type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url == '/logo.svg'){
        res.writeHead(200, {'Content-Type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url == '/browser-app.js'){
        res.writeHead(200, {'Content-Type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})