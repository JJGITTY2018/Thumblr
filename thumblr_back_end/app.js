var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const cors = require('cors')

const session = require("express-session")
const passport = require("./auth/local.js")

//Routes Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users.js');
const postsRouter = require("./routes/posts.js")
const followRouter = require("./routes/follow.js")
const likesRouter = require("./routes/likes.js")
const imageRouter = require('./routes/images.js');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "BOKU NO BABA",
    resave: false,
    saveUninitialized: true
  }))
  
  app.use(passport.initialize())
  app.use(passport.session())
  
  app.use(cookieParser("BOKU NO BABA"));
//Incoming Paths
app.use('/likes/',imageRouter);
app.use('/images/',imageRouter);
app.use('/likes/',likesRouter);
app.use('/follow/',followRouter)
app.use("/posts",postsRouter)
app.use('/users',usersRouter);
app.use('/*', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
