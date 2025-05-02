const express = require('express');
const axios = require('axios');
const Todo = require('../models/Todo');
const auth = require('../middleware/auth');

const router = express.Router();

//Create todo
router.post('/', auth, async (req, res) => {
    try {
        const { message , date } = req.body;
        const response = await axios.get('https://catfact.ninja/fact');
        const catFact = response.data.fact;
        const todo = new Todo({
            message,
            date,
            catFact,
            user: req.user.id
        });

        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error : 'Error creating todo' });
    }
});

//Get todo data
router.get('/', auth, async (req, res) => {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
});

module.exports = router;