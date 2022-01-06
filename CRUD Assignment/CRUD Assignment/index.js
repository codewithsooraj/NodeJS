const express = require('express')
const app = express()
var port = process.env.PORT || 3000

app.get('/',(req,res)=>
{
    res.send({
        msg: 'API is working...'
    })
})

app.listen(port,()=>
{
    console.log('Server is running at PORT '+ port)
})

let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let apiRoute = require('./router')
app.use(bodyParser.urlencoded({
    extended:true
})) 
app.use(bodyParser.json())

app.use('/crudapi',apiRoute)

const dbPath = 'mongodb://localhost/CRUD'

const options = {
    useNewUrlParser : true, useUnifiedTopology  : true
}

const connection = mongoose.connect(dbPath, options)
connection.then(()=>
{
    console.log('Database Connected')
}, error=>
{
console.log(error,'error')
})