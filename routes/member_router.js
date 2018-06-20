const jwtHelpers  = require('../helpers/jwtHelpers');
const express = require('express');
const router = express.Router();
const modelMember = require('../models/member_model');
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');
const jwtHelper = require('../helpers/jwtHelpers');
const bcrypt = require('bcrypt');

router.post('/register',
    policy.checkParameters(['mail', 'password', 'first_name', 'name', 'is_admin', 'sub_department_id']),
    function(req, res, next) {
        bcrypt.hash(req.body.password, 10).then(function (hash) {
            let member = {
                first_name: req.body.first_name,
                name: req.body.name,
                mail: req.body.mail,
                hash_pwd: hash,
                is_admin: req.body.is_admin,
                member_valid: 0, // means that the member isn't valid yet
                sub_department_id: req.body.sub_department_id
            }
            modelMember.insert(member).then(function (data) {
                // TODO send mail
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
    if (jwtHelpers.jwtCheckToken(req)){ // the user is already logged in and try to login again
        next(ERRORTYPE.NO_RIGHT)
    } else {
        modelMember.match(req.body.mail, req.body.password).then(function (member) {
            let token = jwtHelpers.jwtSignMember(member)
            member.role = undefined // we don't the client see the member role
            res.json({
                token: token,
                data: member
            })
        }).catch(function (er) {
            next(er)
        })
    }
});


// validate a member, an admin is required to do this action
router.put('/validate_member', policy.requireAdmin, policy.checkParameters(['member_id']), function (req, res, next) {
    modelMember.validate(req.body.member_id).then(function (data) {
        res.json({
            data: data,
            success: true
        })
    }).catch(function (err) {
        next(err)
    })
});

module.exports = router;
