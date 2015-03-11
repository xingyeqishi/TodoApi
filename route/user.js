var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var User = require('../model/user');

router.post('/auth', function(req, res) {
    var data = req.body;
    User.find({name: data.name}, function(err, user) {
        if (err) throw err;
        user = user[0];
        if (user && user.pwd == data.pwd) {
            res.status(200).json({status: 200, data: user});
        } else {
            res.status(200).json({status: 201, msg: '用户名密码错误'});
        }
    });
});

router.post('/save', function(req, res) {
    var data = req.body;
    console.log(data);
    if (data.pwd != data.pwd2) {
        res.status(200).json({status: 201, msg: '两次输入密码不匹配'});
    } else {
        User.findOne({name: data.name}, function(err, user) {
            if (err) throw err;
            if (user) {
                res.status(200).json({status: 201, msg: '用户名已存在'});
            } else {
                var newUser = User({
                    id: uuid.v1(),
                    name: data.name,
                    pwd: data.pwd
                });
                newUser.save(function(err) {
                    if (err) throw err;
                    res.status(200).json({status: 200, data: id});
                });
            }
        });
    }
});

module.exports = router;
