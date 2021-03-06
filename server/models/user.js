//Simranpreet Kaur - 200427339
//Website name: http://localhost:3000/ and http://localhost:4200/

const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')
const User = new mongoose.Schema({
    username: String,
    password: String,
    //Google Login
    oauthId: String,
    oauthProvider: String,
    create: Date
})
//Make a SPECIAL class intended for user management
User.plugin(plm);

//make public
module.exports = mongoose.model('User', User)