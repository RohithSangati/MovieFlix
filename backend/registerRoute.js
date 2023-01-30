const { validateHeaderName } = require('http');

var registerRoute=require('express')();


registerRoute.post("/",(req,res)=>{
    var fs=require('fs');
    fs.readFile("files/users.json",(err,data)=>{
        var obj=JSON.parse(data);
        if(checkIfThere(obj,req.body)){
            res.send("User already exists");
        }
        else{
            var newData=req.body;
            var email=newData.email;
            obj[email]=req.body;
            fs.writeFile("files/users.json",JSON.stringify(obj),err=>{
                res.send("Successfully registerd");
            })
        }
    })
})

function checkIfThere(obj,newData){
    var email=newData.email;
    return obj[email]!=null;
}




module.exports=registerRoute;