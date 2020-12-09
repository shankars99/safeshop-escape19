var mongoose = require('mongoose');

var items = mongoose.Schema({
    item_id:Number,
    name:String,
    company:String,
    price:Number,
    additional_notes:String,
    photo : String,

},  {
    collection:"items"
});

module.exports = mongoose.model('items',items);
