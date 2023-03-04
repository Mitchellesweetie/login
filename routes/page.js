const express=require('express')
const router=express.Router()

router.get('/register',function(req,res){
    
    res.render("register")


});
router.get('/home',function(req,res){
    res.render("home")
})
router.get('/market',function(req,res){
    res.render("market")
})
module.exports=router