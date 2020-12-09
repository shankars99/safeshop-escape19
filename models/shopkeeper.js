var mongoose = require('mongoose');

var shopkeeper = mongoose.Schema({

    user_id:Number,
    shopkeeper_id:Number,
    aadhar_id:{type:Number,min:100000000000,max:999999999999}

},  {
    collection:"shopkeeper"
});

module.exports = mongoose.model('shopkeeper',shopkeeper);
