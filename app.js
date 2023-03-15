const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();


app.get("/", function(req, res){
  res.send("You're in!");
})

app.listen(3000, function(){
  console.log("You're in!");
});
