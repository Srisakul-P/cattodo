const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

//Register
router.post('/register', async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message : 'User registered' });
    }   catch (e) {
        res.status(400).json({ error : 'Username already taken' });
    }
});

//Login 
router.post('/login', async (req, res) => {
    const { username , password } = req.body;
    const user = await User.findOne({username});

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error : 'Invalid credentials' });
    }

    const token = jwt.sign({ id : user._id }, process.env.JWT_SECRET);
    res.json({ token });
});

module.exports = router;