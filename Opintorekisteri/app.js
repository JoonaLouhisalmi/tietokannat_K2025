var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES (Opintorekisteri CRUD)
const opiskelijaRouter = require('./routes/opiskelija');
const opintojaksoRouter = require('./routes/opintojakso');
const arviointiRouter = require('./routes/arviointi');
const userRouter = require('./routes/user');

// USE ROUTES
app.use('/opiskelija', opiskelijaRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/arviointi', arviointiRouter);
app.use('/user', userRouter);

module.exports = app;
