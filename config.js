require('dotenv').config();

module.exports = {
    NODE_ENV:process.env.NODE_ENV || "production",
    PORT:process.env.PORT || "3000",
    HOST:process.env.HOST||"localhost"
}
