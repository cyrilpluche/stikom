const jwtHelpers  = require('../helpers/jwtHelpers');
const express = require('express');
const router = express.Router();
const modelMember = require('../models/member_model');
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');
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
                sub_department_id: req.body.sub_department_id,
                seed: 'seed' // value
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
router.post('/login', policy.checkParameters(['mail', 'password']),
    policy.emailValidator, function (req, res, next) {
    if (jwtHelpers.jwtCheckToken(req)){ // the user is already logged in and try to login again
        next(ERRORTYPE.NO_RIGHT)
    } else {
        modelMember.match(req.body.mail, req.body.password).then(function (member) {
            console.log(member)
            if (member.valid !== 1 && member.seed != null) { // the member needs to validate hist account
                return Promise.reject(ERRORTYPE.VALIDATION_REQUIRED)
            } else {
                let token = jwtHelpers.jwtSignMember(member)
                member.role = undefined // we don't want the client to see the member role
                member.seed = undefined
                res.json({
                    token: token,
                    data: member
                })
            }

        }).catch(function (er) {
            next(er)
        })
    }
});


// verify the token before
router.post('/loggedIn', function (req, res, next) {
    jwtHelpers.jwtDecode(req, function (err, decode) {
        if (err) {
            console.log(err)
            next(ERRORTYPE.NO_RIGHT)
        }
        console.log(decode)
        let member = {
            member_id: decode.member_id,
            member_first_name: decode.member_first_name,
            member_name: decode.member_name,
            member_mail: decode.member_mail,
            member_admin: decode.member_admin,
            member_valid: decode.member_valid,
            sub_department_id: decode.sub_department_id,
            seed: decode.seed
        }
        modelMember.exists(member).then(function (data) {
            res.send(data);
        }).catch(function (e) {
            next(e);
        });
    })

});

// validate_login a member, an admin is required to do this action
router.put('/validate_member', policy.requireAdmin, policy.checkParameters(['member_id']), function (req, res, next) {
    modelMember.validate_login(req.body.member_id).then(function (data) {
        res.json({
            data: data,
            success: true
        })
    }).catch(function (err) {
        next(err)
    })
});

module.exports = router;
