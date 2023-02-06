var movieRoute=require("express").Router()
var movieController=require("../controllers/movieController")

movieRoute.post("/addmovie",movieController.addmovie);
movieRoute.get("/getmovies",movieController.getmovies);
movieRoute.get("/getmovie/:id",movieController.getmovie);


module.exports=movieRoute;