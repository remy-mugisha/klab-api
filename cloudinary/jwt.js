const jwt = require ("jsonwebtoken");
const dotenv = require ("dotenv");
// const  sign = require ("../cloudinary/jwt");
dotenv.config();

exports.sign = (payload) => jwt.sign(payload,process.env.JWT_SECRETKEY,{expiresIn:'1h'})
 exports.verify = (payload) => jwt.verify(payload,process.env.JWT_SECRETKEY)