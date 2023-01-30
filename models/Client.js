const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const userSchema= new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    role : {type: String, required: true},

})

module.exports = mongoose.model('User', userSchema);