const JWT = require ("jsonwebtoken");
module.exports = (req, res, next)=>{

    const token = req.header('x-auth-token');

    if(!token){
        res.json({
            msg: "Provide a valid token"
        });
        return;
    } 
    try{
        let user = JWT.verify(token , "myTopSecretKey");

        req.user = user.email;
        next();

    }
    catch (e) {
        res.json({
            msg: "Provide a valid token"
        });

        
    }


}