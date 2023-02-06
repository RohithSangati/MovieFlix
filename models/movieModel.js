var conn=require("./connection")
var db=conn.db
var mongoose=conn.mongoose

var movieSchema={
    movieId:{type:String},
    name:{type:String},
    cardImage:{type:String},
    coverImage:{type:String},
    description:{type:String},
    category:{type:String},
    format:{type:String},
    duration:{type:Number},
    language:{type:String},
    bookings:{type:Number},
    theatreObjects:[{theatre:{type:String},price:{type:Number},startDate:{type:Date},endDate:{type:Date}}]
}


var movieModel=mongoose.model("movies",movieSchema)

module.exports={movieModel};