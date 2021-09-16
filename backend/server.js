const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const news = require('./router/news')
const technews = require('./router/technews')
//const feedback = require('./router/feedback')
const path = require('path')
const port = process.env.PORT || 8080;

app.use("/", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type , Authorization');
    next();
})
  
app.use(bodyParser.json())

app.use('/',news)
app.use('/',technews)

app.use(express.static(path.join(__dirname,'public')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})


 
app.listen(port, () => {
    console.log(`Server started at port : ${port}`)
})