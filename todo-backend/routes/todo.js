const router = require('express').Router();
const Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
    Todo.find()
        .then(Todos => res.json(Todos))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newTodo = new Todo ({
        username,
        description,
        duration,
        date,
    });

    newTodo.save()
        .then(() => res.json('Exercise Added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(Todos => res.json(Todos))
        .catch(err => res.status(400).json('Error:' + err));

});
router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(Todos => res.json('Exercise Deleted!'))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req, res) => {
Todo.findById(req.params.id)
.then(todo =>{

    todo.username = req.body.username;
    todo.description = req.body.description;
    todo.duration = req.body.duration;
    todo.date = Date.parse(req.body.date);

    todo.save()
        .then(() => res.json('Exercise Details Updated'))
        .catch(err => res.status(400).json('Error:' + err));

})
.catch(err => res.status(400).json('Error:' + err));

});

module.exports = router;