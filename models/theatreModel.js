var conn=require("./connection")
var db=conn.db
var mongoose=conn.mongoose

var theatreSchema={
    theatreId:{type:String},
    name:{type:String},
    theatreImage:{type:String},
    location:{type:String},
    bookings:{type:Number},
    movieObjects:[{movie:{type:String},price:{type:Number},startDate:{type:Date},endDate:{type:Date}}],
    beverageObjects:[{beverage:String,price:Number}]
}

theatreModel=mongoose.model("theatres",theatreSchema)

module.exports={theatreModel} 