////////// packages -----------------------------------------------
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

////////// Initialize the packages -----------------------------------------------
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");
app.set('view options', {
	strict: true,
	destructuredLocals: ["user","timestamp"],
})

var D = new Date();
var time = D.getHours() +":"+  D.getMinutes() ;

app.route("/bot")
  .post(function(req,res){
    
  });


////////// server  -----------------------------------------------

app.get("/",function(req,res){
  res.render("chatbot");
})


app.listen(3000 , function() {
    console.log("Server started on port 3000");
})