const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const expressEjsLayout = require("express-ejs-layouts");

//Mongoose
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connected successfully"))
.catch((err)=>console.log(err));
//EJS
app.set("view engine", "ejs");
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/", require("./routes/index"));
app.use("/user", require("./routes/users"));

const port = 3000;
app.listen(port, ()=> console.log((`Listen on port ${port}`)));