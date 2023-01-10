const express = require('express');
const app = express();



const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
// true -> can send nested object
// false -> can't send nested object

app.use(bodyParser.json());


// mongodb configuration
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://notes_app123:cPzqS086oitbLiGN@cluster0.zpvfxfw.mongodb.net/?retryWrites=true&w=majority").then(function(){

    const noteRouter = require("./routes/noteRoutes");
    app.use("/notes", noteRouter);

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("server started on port", PORT);
})
