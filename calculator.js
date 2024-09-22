const express = require("express");

const app = express();

app.get("/", function(req, res) {
    // a Respond to display on the browser
    res.send(`Hello World`);
})

app.listen(3000, function(){
    console.log(`server running`);
});
