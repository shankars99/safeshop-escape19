var mongoose = require('mongoose');

var volunteer_requests = mongoose.Schema({
    delivery_id : Number,
    volunteer_id : Number,
    status:{type:Number,min:1,max:10},
    volunteer_request_id: Number
},
{
    collection:"Volunteer Requests"
});

module.exports = mongoose.model('Volunteer_Requests',volunteer_requests);
