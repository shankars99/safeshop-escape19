var mongoose = require('mongoose');


const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const timeschema = new mongoose.Schema({
    start_time: {type: Number, min: 1, max: 48},
    end_time: {type: Number, min: 1, max: 48}
});

const addressSchema = new mongoose.Schema({
    line_1:String,
    line_2:String,
    line_3:String,
    state:String,
    district:String,
    pincode:{type:Number,min:100000,max:999999}
});

const slotSchema = new mongoose.Schema({
    slot_id:{type: Number, min: 1, max: 48},
    count:{type: Number, min: 0}
});

var shops = mongoose.Schema({

    shopkeeper_id:Number,
    shop_id:Number,
    shop_name:String,
    category:String,
    available_day:[Date],
    available_time:[timeschema],
    address:{type: addressSchema} ,
    location:{type:pointSchema},
    items:[Number],
    day1_slots:[slotSchema],
    day2_slots:[slotSchema],
    delivery_available: Boolean

},  {
    collection:"shops"
});

module.exports = mongoose.model('shops',shops);
