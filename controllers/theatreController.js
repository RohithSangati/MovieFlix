var theatremodel=require("../models/theatreModel")

function addtheatre(req,res){
    var theatre=new theatremodel.theatreModel({
        theatreId:req.body.theatreId,
        name:req.body.name,
        theatreImage:req.body.theatreImage,
        location:req.body.location,
        bookings:req.body.bookings,
        movieObjects:req.body.movieObjects,
    })

    theatre.save((err,data)=>{
        res.send("Theatre Added Successfully");
    })
}

module.exports={addtheatre};