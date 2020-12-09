//can be used instead of pickup as it tracks customers that enter on the fly, log their name, cookie for store name
//and date and time from the ObjectId() created on default by mongo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portalSchema = new Schema({
    phone : Number,
    store: String
},
{
	collection:"Portal"
});

var Portals = mongoose.model('Portal', portalSchema);
module.exports = Portals;
