const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post("/", function(req, res) {

    console.log(`weight is :${req.body.weight}`);
    console.log(`height is :${req.body.height}`);

    let weight = req.body.weight;
    let height = req.body.height;

    let bmiResult = weight / Math.pow(height, 2);

    console.log(`bmi is : ${bmiResult}`)
    res.send(`the result is in \nYour BMI is: ${bmiResult}`);    
})

app.listen(3000, function(){
    console.log(`server is running on port: 3000`);
})