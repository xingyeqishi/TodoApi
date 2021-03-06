/*jshint node:true */
var express = require('express'),
    ecstatic = require('ecstatic'),
    bodyParser = require('body-parser');

var mongoose = require('mongoose');

var userRouter = require('./route/user');
var todoRouter = require('./route/todo');

mongoose.connect('mongodb://localhost/todo');
module.exports = function createServer(app) {
    initMiddleware(app);

    return app;
};
/**
 * 初始化中间件
 */
function initMiddleware(app) {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    // parse application/json
    app.use(bodyParser.json());
    app.use(ecstatic({ root: __dirname + '/public' }));
    app.get('/', function(req, res) {
        res.send('hi');
    });
    app.use('/user', userRouter);
    app.use('/todo', todoRouter);
}
