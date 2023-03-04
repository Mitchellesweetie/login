const express=require('express')
const mysql=require('mysql')
const dotenv=require('dotenv')
const hbs=require("hbs")
const path=require('path')
const port=4500

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"food"
})


db.connect((err)=>{
    if(!err){
        console.log('successfll')
    }
    else{
        console.log(err)
    }
})
const app=express()
app.use(express.json())
app.use(express.urlencoded({extend:false}))
app.set('view engine','hbs')

const public=path.join(__dirname,'./public')
app.use(express.static(public))
app.use(express.static('view/image'))

app.use('/',require('./routes/page.js'))
app.use('/auth',require('./routes/auth'))
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`server running on ${port}`)
    }
})