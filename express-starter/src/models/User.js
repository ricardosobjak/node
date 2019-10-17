const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    mail: String
});

module.exports = mongoose.model('User', UserSchema);