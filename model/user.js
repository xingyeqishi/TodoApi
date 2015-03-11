var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: {type: String, required: true, unique: true},
    name: String,
    pwd: String,
    created_at: Date
}, {autoIndex: true});

userSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.created_at = currentDate;
    next();
});

var User = mongoose.model("User", userSchema);

module.exports = User;
