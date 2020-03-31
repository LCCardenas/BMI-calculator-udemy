const express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true })); // for parsing the HTTP request

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var finalBmi = weight / (height * height);
  res.send("Your BMI is: " + finalBmi);
});

app.listen(3001, function() {
  console.log("Server started on port 3001");
});
