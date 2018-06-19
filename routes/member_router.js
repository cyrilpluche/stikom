const jwtHelpers  = require('../helpers/jwtHelpers');
const express = require('express');
const router = express.Router();
const modelMember = require('../models/member_model');
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');
const jwtHelper = require('../helpers/jwtHelpers');
const bcrypt = require('bcrypt');

router.post('/register',
    policy.checkParameters(['mail', 'password', 'first_name', 'name', 'admin_id', 'sub_department_id']),
    function(req, res, next) {
        bcrypt.hash(req.body.password, 10).then(function (hash) {
            let member = {
                first_name: req.body.first_name,
                name: req.body.name,
                mail: req.body.mail,
                hash_pwd: hash,
                admin_id: req.body.admin_id,
                member_valid: 0, // means that the member isn't valid yet
                sub_department_id: req.body.sub_department_id
            }
            modelMember.insert(member).then(function (data) {
                res.json(data)
            }).catch(function (e) {
                return Promise.reject(e)
            })
        }).catch(function (er) {
            next(er)
        });
});

/*
 * before accessing to this route we check if every parameter are there and if the mail is valid
 */
router.post('/login', policy.checkParameters(['mail', 'password']), policy.emailValidator, function (req, res, next) {
    if (jwtHelpers.checkToken(req)){ // the user is already logged in and try to login again
        next(ERRORTYPE.NO_RIGHT)
    } else {
        modelMember.match(req.body.mail, req.body.password).then(function (member) {
            let token = jwtHelpers.jwtSignMember(member)
            res.json({
                token: token,
                data: member
            })
        }).catch(function (er) {
            next(er)
        })
    }
})

module.exports = router;
