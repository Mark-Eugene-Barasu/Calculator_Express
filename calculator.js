const express = require("express");
// use the body-parser to use inputs from form to
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));// to post nested objects


app.get("/", function(req, res) {
    // a Respond to display on the browser
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function(req, res){
    // console.log(req.body); will display the parsed input from the html form

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = Number(num1) + Number(num2);
    res.send(`Thank you, the result of your calculation is ${result}`);
})


app.listen(3000, function(){
    console.log(`server running on port: 3000`);
});



//to actually print out a file path
// => console.log(__dirname)

// in terminal it is
// => pwd

