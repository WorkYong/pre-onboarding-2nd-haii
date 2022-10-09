const jwt = require("jsonwebtoken")

const authMiddleware = async(req, res, next) => {
    const token = req.headers["authorization"];
       
    if(!token) {
        const err = new Error("NOT_EXIST_TOKEN")
        err.statusCode = 400;
        throw err;
    }
    
    const user = jwt.verify(token, process.env.jwt_secret_key);
    
    if(!user) {
        const err = new Error("INVAILD_TOKEN")
        err.statusCode = 403;
        throw err;
    }
    
    req.user = user;
    next();
};

module.exports= {
    authMiddleware
};