var mongoose = require('mongoose');
var schema = mongoose.Schema;

var todoSchema = new Schema({
    id: {type: String, required: true, unique: true},
    content: {type: String},
    created_at: Date,
    userid: String
}, {autoIndex: true});

todoSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.created_at = currentDate;
    next();
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
