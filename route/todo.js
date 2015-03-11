var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var Todo = require('../model/todo');

router.post('/save', function(req, res) {
    var data = res.body;
    var newTodo = Todo({
        id: uuid.v1(),
        content: data.data,
        userid: data.userid
    });
    newTodo.save(function(err) {
        if (err) throw err;
        res.status(200).json({status: 200});
    });
});

router.get('/list', function(req, res) {
    Todo.find({}, function(err, todos) {
        if (err) throw err;
        res.status(200).json({status:200, data:todos});
    });
});

router.post('/delete', function(req, res) {
    var data = res.body;
    Todo.find({id: data.id}, function(err, todo) {
        if (err) throw err;
        todo.remove(function(err) {
            if (err) throw err;
            res.status(200).json({status: 200});
        });
    });
});
