const express = require("express");

const app = express();

app.get("/", function(req, res) {
    console.log(`server running`);

    // a Respond to display on the browser
    res.send(`Hello World`);
})

app.listen(3000);