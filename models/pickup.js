var mongoose = require('mongoose');

var pickup = mongoose.Schema({
    phone: Number, //added for customer number
    shop: Number, //added shop number
    slot: {type: Number, min: 1, max: 48},
    order_id : Number,
    status : {type: Number,min:1,max:3},
    pickup_id : Number
},
{
	collection:"pickup"
});
module.exports = mongoose.model('pickup',pickup);
