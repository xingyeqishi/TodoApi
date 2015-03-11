/*jshint node:true */
var express = require('express'),
    bodyParser = require('body-parser');

var mongoose = require('mongoose');

var userRouter = require('./route/user');
var todoRouter = require('./route/todo');

mongoose.connect('mongodb://localhost/sfb');
module.exports = function createServer(app) {
    initMiddleware(app);

    return app;
};
/**
 * 初始化中间件
 */
function initMiddleware(app) {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    app.use('/user', userRouter);
    app.use('/todo', todoRouter);
}