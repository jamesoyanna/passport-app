const express = require("express");
const router = express.Router();
// Login
router.get("/", (req, res)=>{
    res.render("Welcome to my app");
})

//Register page
router.get("/register", (req, res)=>{
    res.render("Register")
})

module.exports = router;