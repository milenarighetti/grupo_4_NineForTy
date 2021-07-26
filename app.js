const express = require('express')
const app = express()
const port = 3030
const path = require('path')

app.get('/', function (req, res) {
    res.send('Hola mundo!')
})

app.get('/home', function(request, response){
    response.sendFile(path.join(__dirname, 'views/index.html'))
})

app.get('/register', function(request, response){
    response.sendFile(path.join(__dirname, 'views/register.html'))
})
app.get('/login', function(request, response){
    response.sendFile(path.join(__dirname, 'views/login.html'))
})

app.use(express.static('public'))

app.get('*', function (request, response){
    response.send('NOT FOUND', 404)
})

app.listen(port, ()=>{
    console.log('La app esta funcionado en http://localhost:'+ port +"/home")
})
