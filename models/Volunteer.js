var mongoose = require('mongoose');

var volunteers = mongoose.Schema({
    user_id : Number,
    age : Number,
    aadhar_id:{type:Number,min:100000000000,max:999999999999},
    photo : String
},
{
    collection:"Volunteers"
});

module.exports = mongoose.model('Volunteers',volunteers);
