
var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_id:Number,
    quantity:Float64Array
});

var orders = mongoose.Schema({
    user_id : Number,
    shop_id : Number,
    type : {type: Number,min:1,max:2},
    order_id : Number,
    items : [itemSchema],
    date : Date,
    time : {type: Number, min: 1, max: 48}
},
{
	collection:"orders"
});
module.exports = mongoose.model('orders',orders);