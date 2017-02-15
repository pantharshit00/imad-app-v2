const express = require('express')
const morgan = require('morgan')
const path = require('path')

const User = require('./model/user')

var app = express()

app.use(morgan('combined'))
app.use('/static',express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

var listi = []
app.get('/list',(req,res)=>{
    if(req.query.item){
    var newItem = req.query.item
    listi.push(newItem)
    }
    res.send(JSON.stringify(listi))
})

var port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`IMAD Course app is listening on port ${port}`)
})