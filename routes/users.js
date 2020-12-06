const express = require("express");
const router = express.Router();
//Import models
const user = require("../models/user");

// Login handle
router.get("/login", (req, res)=>{
    res.render("login");
})

router.get("/register", (req, res)=>{
    const {name, email, password, password2} = req.body;
    let errors = [];
    console.log(" Name " + name + " email :" + email + " pass:" + password);
    if(!name || !email || !password || !password2){
        errors.push({msg: "Please fill in all field"})
    }
    res.render("Register")
})


//Register handle
router.post("/register", (req, res)=>{
})

router.post("/login", (req, res, next)=>{

})
//Logout
router.get("/logout", (req, res)=>{

})
module.exports = router;