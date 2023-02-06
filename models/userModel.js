var conn=require('./connection.js')
var db=conn.db
var mongoose=conn.mongoose

var userSchema={
    name:{type:String},
    email:{type:String},
    password:{type:String},
    mobile:{type:Number},
    dob:{type:Date},
    gender:{type:String},
    address:{type:String},
    movieHistory:{type:Array},
    theatreHistory:{type:Array},
    beverageHistory:{type:Array}
}

var userModel=mongoose.model("users",userSchema);

module.exports={userModel}