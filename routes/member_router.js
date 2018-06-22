const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const tokenGenerator = new (require('uuid-token-generator'))(256); // Default is a 128-bit token encoded in base58

const modelMember = require('../models/member_model');
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');
const mailSender = require('../helpers/mailSender');
const jwtHelpers  = require('../helpers/jwtHelpers');


/*
===========================================  ROUTER GET ============================================
 */
// TODO can be accessible by anyone
router.get('/validate_member/:seed', policy.requiresNoAuthenticateUser,requireSeed, function (req, res, next) {
    modelMember.validate_seed(req.params.seed).then(function (data) {
        return modelMember.selectAllAdmin().then(function (admins) {
            admins.forEach(function (admin) {
                mailSender.send(admin.member_mail, `A new member requires your validation
                <p><b>mail: ${data.member_mail}</b></p>`, '', function () {
                    console.log(admin)
                })
            });
            res.json({data: data});
        }).catch(function (e) {
            throw e
        })
    }).catch(next)
});

/*
=========================================== ROUTER POST =============================================
 */

router.post('/register',
    policy.checkParameters(['mail', 'password', 'first_name', 'name', 'is_admin', 'sub_department_id']),
    policy.requiresNoAuthenticateUser,
    requireNoneExistingMail,
    function(req, res, next) {
        let seed = tokenGenerator.generate();
        bcrypt.hash(req.body.password, 10).then(function (hash) {
            let member = {
                first_name: req.body.first_name,
                name: req.body.name,
                mail: req.body.mail,
                hash_pwd: hash,
                is_admin: req.body.is_admin,
                member_valid: 0, // means that the member isn't valid yet
                sub_department_id: req.body.sub_department_id,
                seed: seed
            }
            modelMember.insert(member).then(function (data) {
                let generateLink = `${process.env.SERVER_URL}:${process.env.PORT}/api/member/validate_member/${seed}`;
                console.log(generateLink);
                mailSender.send(req.body.mail, 'Account created',
                    `<h3 style="color: blue">Your account has been created with success !</h3><br><br>Click on the following link to valid your account.
                       Yet can't connect unless an administrateur valid again your account.<br><br>
                        <h4><a href="${generateLink}">valid my acount</a></h4>`,
                    [], function (error, response) {
                        if (error) {
                            next(ERRORTYPE.customError(error))
                        } else {
                            res.json(data)
                        }
                    });
            }).catch(next)
        }).catch(next);
    });

/*
 * before accessing to this route we check if every parameter are there and if the mail is valid
 */
router.post('/login', policy.checkParameters(['mail', 'password']),
    policy.requiresNoAuthenticateUser,
    policy.emailValidator,
    function (req, res, next) {
        if (jwtHelpers.jwtCheckToken(req)){ // the user is already logged in and try to login again
            next(ERRORTYPE.FORBIDDEN)
        } else {
            modelMember.match(req.body.mail, req.body.password).then(function (member) {
                if (!member) {
                    throw ERRORTYPE.WRONG_IDENTIFIER
                } else {
                    if (member.valid !== 1 && member.seed != null) { // the member needs to validate hist account
                        return Promise.reject(ERRORTYPE.VALIDATION_REQUIRED)
                    } else {
                        member.member_password = undefined; // we don't want to send the pwd to the client
                        let token = jwtHelpers.jwtSignMember(member)
                        member.role = undefined // we don't want the client to see the member role
                        member.seed = undefined
                        res.json({
                            token: token,
                            data: member
                        })
                    }
                }
            }).catch(next)
        }
    });

// verify the token before
router.post('/loggedIn', function (req, res, next) {
    jwtHelpers.jwtDecode(req, function (err, decode) {
        if (err) {
            next(ERRORTYPE.FORBIDDEN)
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
            if (!data) {
                throw (ERRORTYPE.FORBIDDEN);
            } else {
                data.member_password = undefined;
                data.member_admin = undefined;
                data.seed = undefined
            }
            res.send({data: data});
        }).catch(next);
    })

});


/*
========================================== ROUTER PUT ============================================
 */

// validate_login a member, an admin is required to do this action
router.put('/validate_member',
    policy.requireAdmin, policy.checkParameters(['member_id']),
    requireNullSeeder,
    function (req, res, next) {
    modelMember.validate_login(req.body.member_id).then(function (data) {
        res.json({
            data: data,
            success: true
        })
    }).catch(next)
});


/*
========================================== FUNCTIONS ============================================
 */

/**
 * check if the mail exist before trying to connect
 * @param req
 * @param res
 * @param next
 */
function requireNoneExistingMail (req, res, next) {
    let mail = req.body.mail
    modelMember.existByMail(mail).then(function (data) {
        if (data) { // the mail exists the users cannot connect
            throw ERRORTYPE.customError('This email arealdy exists please find another one',
                'MAIL ALREADY USED', 403);
        } else {
            next()
        }
    }).catch(function (e) {
        next(e)
    })
}

/**
 * Check a user exists according to the seed
 * @param req
 * @param res
 * @param next
 */
function requireSeed (req, res, next) {
    modelMember.existsBySeed(req.params.seed).then(function (data) {
        if (data) {
            next ()
        } else {
            throw ERRORTYPE.customError('Coudn\'t find this member, you link has maybe expired', 'SEED NOT FOUND', 404);
        }
    }).catch(next)
}

/**
 * @param req
 * @param res
 * @param next
 */
function requireNullSeeder (req, res, next) {
    modelMember.findOne(req.body.member_id).then(function (data) {
        if (data.seed != null || data.member_valid === 0) {
            throw ERRORTYPE.customError('Error this user hasn\'t activated his link yet you cannot activate now',
                'ACCOUNT NOT ACTIVATED', 403)
        } else {
            next()
        }
    }).catch(next)
}

module.exports = router;
