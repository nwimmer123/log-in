var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/log-in');

var Account = require('./account');

module.exports.Account = Account;
