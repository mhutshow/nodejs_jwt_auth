
const router = require("express").Router();
const {check, validationResult} = require( "express-validator");
const bcrypt  = require ("bcrypt");
const JWT = require ("jsonwebtoken");

const {users} = require("../db");

router.get("/all" , (req, res)=>{
    res.json(users);

});

router.post("/signup" , [
    check ("email").isEmail(),
    check ("password").isLength({max: 34 , min : 6})
], async (req, res)=>{
    const {password, email }  = req.body;
    console.log(password, email);

    const errors = validationResult(req);

    if(errors.isEmpty()){

        console.log(users);


        let user = users.find((u)=>{
            return u.email === email;
        });
        if(user){
            return res.json({
                "errors" : [
                    {
                        code: 400,
                        msg : "User already exist"
                    }
                ]
            });
        }

        const hashedPassword = await  bcrypt.hash(password , 10)


        users.push({
           email : email,
           password: hashedPassword
        });
        const token = JWT.sign({
            email
        },"myTopSecretKey", {expiresIn : 3000} )
        res.json({
            token
        });

       // res.send("Routes are working");


    } else{

        return res.status(400).json({
            errors: errors.array()
        });
        return;
    }

});

router.post("/login" , async  (req, res)=>{


    const email = await req.body.email;
    let password  = await  req.body.password;


    console.log(password);

    let loggedInUser =  users.find((user)=>{
        return  user.email === email
    }) ;
    console.log(loggedInUser);
    if(!loggedInUser){
        return res.json({
            "errors" : [
                {
                    code: 400,
                    msg : "Invalid credentials."
                }
            ]
        });
    }
    console.log(loggedInUser.password)
    let isMatch  = await bcrypt.compare(password , loggedInUser.password)
    console.log(isMatch);


    if(isMatch){
        const token = JWT.sign({
            email
        },"myTopSecretKey", {expiresIn : 3000} )
        res.json({
            token
        });
    } else{
        return res.json({
            "errors" : [
                {
                    code: 400,
                    msg : "Invalid credentials."
                }
            ]
        });
    }

});



module.exports = router;



