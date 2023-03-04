const mysql=require('mysql')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"food"
})


exports.register=(req,res)=>{

    console.log(req.body)
    const {Username,email,password,password1}=req.body

    db.query("select email from food where email=?",[email],async(err,result)=>{
        if(err){
            console.log(err)
        }
        if(result.length>0){
            return res.render('register',{
                message:'that email is already used'
            })

        }
        else if(password!==password1){
            return res.render('register',{
                message:'passwords not matching'
            })
        }
        const hash=await bcrypt.hash(password,8)
        db.query("insert into food(username,email,password,password1)values(?,?,?,?)"[Username,email,password,password1],(err,result)=>{
            if(err)throw err
            
            else{
                console.log(result)
                res.render('login')
            }
            
        }) 
    })
    
    
    
   }