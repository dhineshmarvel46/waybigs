const mongoose = require('mongoose')

const userschema = new mongoose.Schema(
    {
        name :String,
        email : String,
        password :String
    }
)

const UserModel = mongoose.model("user's",userschema)
module.exports = UserModel