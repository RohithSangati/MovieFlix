var theatreRoute=require("express").Router()
var theatreController=require("../controllers/theatreController")


theatreRoute.post("/addtheatre",theatreController.addtheatre)


module.exports=theatreRoute;