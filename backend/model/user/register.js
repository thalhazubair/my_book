const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    phone: Number,
    password: String
});


const User = mongoose.model("User", userSchema);

module.exports = {
    User
}