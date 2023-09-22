const http = require('http');
const path = require('path');

const server = http.createServer((req, res) =>{
    console.log(reg.method)
    const url = req.url

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

    else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1>I guess NOT</h1>')
        res.end()
    }
}).listen(6000)