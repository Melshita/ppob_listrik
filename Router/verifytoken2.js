const jwt = require("jsonwebtoken")

verifytoken = (req, res, next) => {
    let headers = req.headers.authorization
    let token = null

    if(headers != null){
        token = headers.split(" ")[1]
    }

    if(token == null){
        res.json({
            message: "Unrecognized or disallowed"
        })
    }else{
        let jwtHeader = {
            algorithm: "HS256"
        }

        let secretKey = "pelanggan"

        jwt.verify(token, secretKey, jwtHeader, err => {
            if(err){
                res.json({
                    message: "Invalid token"
                })
            }else{
                next()
            }
        })
    }
}

module.exports = verifytoken