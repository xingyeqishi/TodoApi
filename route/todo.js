var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var Todo = require('../model/todo');

router.post('/save', function(req, res) {
    var data = req.body;
    var newTodo = Todo({
        id: uuid.v1(),
        content: data.content,
        userid: data.uid
    });
    newTodo.save(function(err) {
        if (err) throw err;
        res.status(200).json({status: 200});
    });
});

router.get('/list', function(req, res) {
    var data = req.body;
    Todo.find({userid: data.uid}, function(err, todos) {
        if (err) throw err;
        res.status(200).json({status:200, data:todos});
    });
});

router.post('/delete', function(req, res) {
    var data = req.body;
    Todo.find({id: data.id}, function(err, todo) {
        if (err) throw err;
        todo.remove(function(err) {
            if (err) throw err;
            res.status(200).json({status: 200});
        });
    });
});

module.exports = router;
