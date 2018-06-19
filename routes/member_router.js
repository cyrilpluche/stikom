const jwtHelpers  = require('../helpers/jwtHelpers');
const express = require('express');
const router = express.Router();
const modelMember = require('../models/member_model');
const policy = require('../policy/policy_middleware')
const ERRORTYPE = require('../policy/errorType')
const jwtHelper = require('../helpers/jwtHelpers')


router.post('/register',
    policy.checkParameters(['mail', 'password', 'first_name', 'name', 'admin', 'sub_departement']),
    function(req, res, next) {
        let first_name = req.body.first_name
        let name = req.body.name
        let mail = req.body.mail
        res.send('Salut')
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
