const express = require("express");

const app = express();

app.get("/", function(req, res) {
    // a Respond to display on the browser
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, function(){
    console.log(`server running on port: 3000`);
});


```
to actually print out a file path
=> console.log(__dirname)

in terminal it is
=> pwd

```
