import express from 'express'
import calculator  from './src/calculate.js'
const app = express()

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/:operator/:num1/:num2',(req,res)=>{
    var operator = req.params.operator
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var result = calculator(num1,num2,operator)
    res.json(result)
})


app.listen('3000',()=>{
    console.log('listening on port 3000')
})