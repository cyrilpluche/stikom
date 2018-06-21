const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const expressJwt = require('express-jwt');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
require('dotenv').config();

const ERROR_TYPE = require('./policy/errorType')
/*
========================================== DEFINITION ROUTES ============================================
 */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({origin: '*'}));
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(__dirname + '/public'));

// TODO mettre en place express jwt

/*
========================================== UTILISATION ROUTES ============================================
 */


app.use('/api/member', require('./routes/member_router'));
app.use('/api/sop', require('./routes/sop_router'));
app.use('/api/organisation', require('./routes/organisation_router'));
app.use('/api/branch', require('./routes/branch_router'));
app.use('/api/department', require('./routes/department_router'));
app.use('/api/sub_department', require('./routes/sub_department_router'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // TODO rediriger l'erreur sur le dist
    console.log('Error')
  next(createError(404));
});

// error handler
// occurs when a middleware use next function with parameters
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

module.exports = {app: app, server: server};
