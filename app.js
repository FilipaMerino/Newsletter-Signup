//jshint esverion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { urlencoded } = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true }));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");

})

app.post("/", function(req, res){

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var clientEmail = req.body.email;

});



app.listen(3000, function(){
  console.log("You're in!");
});
