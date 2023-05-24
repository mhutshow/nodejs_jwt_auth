const router = require("express").Router();
const  {publicPost , privatePost} = require("../db")

const authChecker = require("../middlewear/authChecker");

router.get( "/public" , (req, res) =>{

    res.json(publicPost);

});

router.get( "/private"  ,authChecker , (req, res) =>{

    res.json(privatePost);

});



module.exports = router