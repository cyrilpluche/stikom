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

app.use(cors({origin: '*'}));
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname + '/dist/client'));
app.use(express.static(path.join(__dirname, 'dist/client')));

const unlessPath = [
    '/favicon.ico', '/api/member/register', '/api/member/login', '/api/member/validate_registration',
    '/api/organisation/all', '/api/department/all', '/api/branch/all', '/api/sub_department/all'
];
// TODO remettre en place express jwt
// app.use('/api/',expressJwt({ secret: process.env.JWT_SECRET }).unless({ path: unlessPath}));

/*
========================================== ROUTERS ============================================
 */

app.use('/api/member', require('./routes/member_router'));
app.use('/api/sop', require('./routes/sop_router'));
app.use('/api/organisation', require('./routes/organisation_router'));
app.use('/api/branch', require('./routes/branch_router'));
app.use('/api/department', require('./routes/department_router'));
app.use('/api/sub_department', require('./routes/sub_department_router'));
app.use('/api/role', require('./routes/role_router'));
app.use('/api/activity', require('./routes/activity_router'));
app.use('/api/managment_level', require('./routes/managment_level_router'));
app.use('/api/project', require('./routes/project_router'));
app.use('/api/job', require('./routes/job_router'));
app.use('/api/unit', require('./routes/unit_router'));
app.use('/api/pdf', require('./routes/pdf_router'));


/*
========================================== ERROR HANDLERS ============================================
 */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // TODO rediriger l'erreur sur le dist
   // console.log('Error')
  // next(createError(404));
    // res.sendFile(path.join(__dirname, 'dist/client/index.html'));
    res.sendFile(path.join(__dirname, 'dist/client/index.html'));

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
