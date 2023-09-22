const fs = require('fs')
const path = require('path')

// fs.writeFileSync(path.join(__dirname, '/name.txt'), "This is the new test file for today", function(err) {
//     if(err){console.log(err); return;}
// })

// fs.appendFileSync(path.join(__dirname, 'nam.txt'), "My name is Ethan", function(err) {
//     if(err){console.log(err); return;}
// })

// fs.unlinkSync(path.join(__dirname, 'name.txt'))

fs.mkdirSync(path.join(__dirname, '/transier'))