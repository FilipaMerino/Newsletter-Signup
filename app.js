const express = require("express");

const app = express();


app.get("/", function(req, res){
  res.send("You're in!");
})

app.listen(3000, function(){
  console.log("You're in!");
});
