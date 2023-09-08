const mongoose = require('mongoose');

const Schema = mongoose.Schema({
	email: String
});

module.exports = mongoose.model('Subscription', Schema);
