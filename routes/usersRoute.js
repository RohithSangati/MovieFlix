var userRoute=require('express').Router()
var userController=require('../controllers/userController')


userRoute.post("/addUser",userController.addUser)
userRoute.post("/validate",userController.validate)
userRoute.get("/getusers",userController.getusers)


module.exports=userRoute;