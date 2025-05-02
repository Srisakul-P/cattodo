const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    message: String,
    date: Date,
    catFact: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Todo', todoSchema);