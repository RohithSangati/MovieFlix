var express=require('express')
const cors=require('cors')

app=express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});



var registerRouter=require('./registerRoute');
app.use("/users",registerRouter);


app.listen(3000);