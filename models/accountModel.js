// accountModel.js
var mongoose = require('mongoose');
// Setup schema
var accountSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: String,
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Account model
var Account = module.exports = mongoose.model('account', accountSchema);

module.exports.get = function (callback, limit) {
    Account.find(callback).limit(limit);
}