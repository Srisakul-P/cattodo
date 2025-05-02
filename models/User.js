const mongoose = require('mongoose');
const bcrypst = require('bcrypt')

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: true
    },
    password: String
});

userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcrypst.hash(this.password, 10)
    }
});

module.exports = mongoose.model('User', userSchema);