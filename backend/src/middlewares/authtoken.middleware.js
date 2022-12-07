const userSchema = require('../models/user'); 
const jwt = require('jsonwebtoken');


    const verifyToken = async (req, res, next) => {
        let token = req.headers["x-access-token"];
    
        if (!token) return res.status(403).json({ message: "No token provided" });
    
        try {
            const decoded = jwt.verify(token, 'hola123');
            req.userId = decoded.id;
        
            const user = await userSchema.findById(req.userId, { password: 0 });
            if (!user) return res.status(404).json({ message: "No user found" });
        
            next();
        } catch (error) {return res.status(401).json({ message: "Unauthorized!" });}
    };

    const isAdmin = async (req, res, next) => {
        try {
            const user = await userSchema.findById(req.userId);
            if (user.rol == 'admin'){
                next();
                return;
            }

            return res.status(403).json({ message: "Require Admin Role!" });
        } catch (error) {return res.status(500).send({ message: error });}
    };

module.exports = {verifyToken,isAdmin};