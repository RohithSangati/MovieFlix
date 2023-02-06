var moviemodel=require("../models/movieModel")

function addmovie(req,res){
    var movie=new moviemodel.movieModel({
        movieId:req.body.movieId,
        name:req.body.name,
        cardImage:req.body.cardImage,
        coverImage:req.body.coverImage,
        description:req.body.description,
        category:req.body.category,
        format:req.body.format,
        duration:req.body.duration,
        bookings:req.body.bookings,
        language:req.body.language,
        theatreObjects:req.body.theatreObjects
    })
    movie.save((err,data)=>{
        res.send("Movie Added Successfully");
        
    })
}



function getmovies(req,res){
    moviemodel.movieModel.find({theatreObjects:{$elemMatch:{startDate:{$lte:Date()},endDate:{$gte:Date()}}}},(err,data)=>{
        res.send(data);
    })
}

function getmovie(req,res){
    moviemodel.movieModel.findOne({movieId:req.params.id},(err,data)=>{
        res.send(data);
    })
}



module.exports={addmovie,getmovies,getmovie};