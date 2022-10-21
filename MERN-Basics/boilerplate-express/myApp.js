let express = require('express');
let app = express();
let bodyParser = require('body-parser');
console.log("Hello World") ;


app.post('/name', function(req, res) {

  console.log(req.body) ;
  
  var string = req.body.first + " " + req.body.last;
  res.json({ name : string });
});


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json()) ;

app.use(function middleware(req,res,next){
  
  str = req.method +" " + req.path + " - " + req.ip; 
  
  
  console.log(str) ;
  next() ;
})




app.get('/name',function(req,res){
  var firstname = req.query.first  ;
  var secondname = req.query.last  ;
  
  var str = firstname + ' ' + secondname ;
  res.json({name:str}) ;
})

app.get('/:word/echo',function (req,res) {
  // console.log(req) ;
  var str = req.params.word ;
  res.json({echo:str}) ;
  
})



const mySecret = process.env['MESSAGE_STYLE']


app.get("/",function(req,res){
  res.sendFile(__dirname + "/views/index.html") ;
});



app.use("/public",express.static(__dirname + "/public")) ;


app.get("/json",function(req,res){
  var response="Hello json" ;
  if(mySecret==="uppercase")
  {
      response = response.toUpperCase() ;

    
  }
  
  
  res.json({"message":response});
}) ;



 module.exports = app;
