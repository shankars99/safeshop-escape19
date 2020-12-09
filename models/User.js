const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    phone : Number,
    email : String,
    user_id : Number,
    password : String,
    type: String
},
{
	collection:"Users"
});

var Users = mongoose.model('User', userSchema);
module.exports = Users;
