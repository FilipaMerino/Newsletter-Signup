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

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const clientEmail = req.body.email;

  const data = {
    members: [{
      email_address: clientEmail,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  }

  const jsonData = JSON(data.stringify(data));

});



app.listen(3000, function(){
  console.log("You're in!");
});

// Audience Id
// 7211e69e97

// API Key
// a7b45baf71ce22c21ad01b65f9ef7990-us13
