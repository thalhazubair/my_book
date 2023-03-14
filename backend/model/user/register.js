const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    phone: Number,
    password: String,
    plan:{
        type:String,
        default:"None"
    },
    isBlocked: {
        type: Boolean
      }
});


const User = mongoose.model("User", userSchema);

module.exports = {
    User
}