//jshint esverion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { urlencoded } = require("body-parser");
const https = require("https");

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
    members: [
      {
      email_address: clientEmail,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data);
  const url = "https://us13.api.mailchimp.com/3.0/lists/7211e69e97";

  const options = {
      method: "POST",
      auth: "filipa1:cdb6cacf2cd0286884aa6a2a971a622d-us13"
  }


  const request = https.request(url, options, function(response){

    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  });

  request.write(jsonData);
  request.end();

});

app.listen(3000, function(){
  console.log("You're in!");
});

// Audience Id
// 7211e69e97

// API Key
// cdb6cacf2cd0286884aa6a2a971a622d-us13
