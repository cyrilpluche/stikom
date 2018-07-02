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

router.get('/all', function (req, res, next) {
    modelMember.selectAll().then(function (data) {
        for (let i = 0; i < data.length; i++) {
            data[i].member_password = undefined
        }
        res.send({data: data})
    }).catch(next)
});

router.get('/waiting_member',
    policy.requireAdmin,
    function (req, res, next) {
        modelMember.selectUnvalidateAccount().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                data[i].member_password = undefined
            }
            res.send({data: data})
        }).catch(next)
    }
);
/*
=========================================== ROUTER POST =============================================
 */

router.post('/register',
    policy.requiresNoAuthenticateUser,
    policy.checkParameters(['mail', 'password', 'first_name', 'name', 'sub_department_id', 'managment_level_id']),
    requireNoneExistingMail,
    function(req, res, next) {
        let seed = tokenGenerator.generate();
        bcrypt.hash(req.body.password, 10).then(function (hash) {
            let member = {
                first_name: req.body.first_name,
                name: req.body.name,
                mail: req.body.mail,
                hash_pwd: hash,
                is_admin: 0,
                member_valid: 0, // means that the member isn't valid yet
                seed: seed,
                sub_department_id: req.body.sub_department_id,
                managment_level_id: req.body.managment_level_id
            }
            modelMember.insert(member).then(function (data) {
                let generateLink = `${process.env.SERVER_URL}:${process.env.CLIENT_PORT}/account-validation/${seed}`;
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
        }).catch(function (e) {
            next(ERRORTYPE.customError(e));
        });
    });

router.post('/create_admin',
    policy.requireAdmin,
    policy.checkParameters(['mail', 'password', 'first_name', 'name', 'sub_department_id']),
    requireNoneExistingMail,
    function (req, res, next) {
        bcrypt.hash(req.body.password, 10).then(function (hash) {
            let member = {
                first_name: req.body.first_name,
                name: req.body.name,
                mail: req.body.mail,
                hash_pwd: hash,
                is_admin: 1,
                member_valid: 1,
                seed: null,
                sub_department_id: req.body.sub_department_id
            };
            modelMember.insert(member).then(function (data) {
                mailSender.send(req.body.mail, 'Account created',
                    `<h3 style="color: blue">Your admin account has been created !</h3>
                        <br><br>As admin you account is already validate.`,
                    [], function (error, response) {
                        if (error) {
                            next(ERRORTYPE.customError(error))
                        } else {
                            res.json(data)
                        }
                    });
            }).catch(next)
        }).catch(function (e) {
            next(ERRORTYPE.customError(e));
        });
    }
);

/*
 * before accessing to this route we check if every parameter are there and if the mail is valid
 */
router.post('/login', policy.requiresNoAuthenticateUser,// the user is already logged in and try to login again
    policy.checkParameters(['mail', 'password']),
    policy.emailValidator,
    function (req, res, next) {
        modelMember.match(req.body.mail, req.body.password).then(function (member) {
            if (!member) {
                throw ERRORTYPE.WRONG_IDENTIFIER
            } else {
                if (member.member_valid !== 1 &&
                    (member.seed !== undefined || member.seed != null || member.seed != '')) { // the member needs to validate hist account
                    throw ERRORTYPE.VALIDATION_REQUIRED
                } else {
                    member.member_password = undefined; // we don't want to send the pwd to the client
                    let token = jwtHelpers.jwtSignMember(member)
                    member.member_role = undefined // we don't want the client to see the member role
                    member.seed = undefined
                    res.json({
                        token: token,
                        data: member
                    })
                }
            }
        }).catch(next)
    });

// verify the token before
router.post('/loggedIn', function (req, res, next) {
    jwtHelpers.jwtDecode(req, function (err, decode) {
        if (err) {
            next(ERRORTYPE.FORBIDDEN)
        }
        let member = {
            member_id: decode.member_id,
            member_first_name: decode.member_first_name,
            member_name: decode.member_name,
            member_mail: decode.member_mail,
            member_admin: decode.member_admin,
            member_valid: decode.member_valid,
            sub_department_id: decode.sub_department_id,
            managment_level_id: decode.managment_level_id,
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
    policy.requireAdmin,
    policy.checkParameters(['member_id']),
    requireNullSeeder,
    function (req, res, next) {
    modelMember.validate_login(req.body.member_id).then(function (data) {
        let loginUrl = `${process.env.SERVER_URL}:${process.env.CLIENT_PORT}/authentification`
        mailSender.send(data.member_mail, 'Account available',
            `<h3 style="color: blue">An admin has validate your account !</h3>
               <br> You can now connect on the website <br>
                <a href="${loginUrl}">login on the website</a>`,
            [], function (err, resultat) {
                res.json({
                    data: data,
                    success: true
                })
            });
    }).catch(next)
});

router.put('/update_password',
    policy.checkParameters(['member_id', 'old_password', 'new_password1', 'new_password2']),
    checkPwdUpdate,
    function (req, res, next) {
        bcrypt.hash(req.body.new_password1, 10).then(function (hash) {
            return modelMember.updatePassword(req.body.member_id, hash)
                .then(function (data) {
                    res.json({data: data});
                }).catch(function (e) {
                    throw e
                })
        }).catch(function (e) {
            if (!e.type) next(ERRORTYPE.customError(e));
            else next(e)
        });
    });

// TODO can be accessible by anyone
router.put('/validate_registration',
    policy.requiresNoAuthenticateUser,
    policy.checkParameters(['seed']),
    requireSeed,
    function (req, res, next) {
        let validationLink = `${process.env.SERVER_URL}:${process.env.CLIENT_PORT}/admin/users`
    modelMember.validate_seed(req.body.seed).then(function (data) {
        return modelMember.selectAllAdmin().then(function (admins) {
            admins.forEach(function (admin) {
                mailSender.send(admin.member_mail,'New member created',`A new member has validate his account and 
                requires your validation <br>
                <img src="cid:aaa@aa.eee" width="8%"/>
                <p><b>mail: ${data.member_mail}</b></p><br>
                Go on the <a href="${validationLink}">validation page </a> to validate this member`,
                    [{filename: 'account.png', path: 'public/images/account.png', cid: 'aaa@aa.eee'}],
                    function (err, resultat) {
                    if (err) console.log(err)
                        else console.log(resultat)
                })
            });
            res.json({data: data});
        }).catch(function (e) {
            throw e
        })
    }).catch(next)
});

router.put('/reset_password');
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
    modelMember.existsBySeed(req.body.seed).then(function (data) {
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

/**
 *
 * @param req
 * @param res
 * @param next
 */
function checkPwdUpdate (req, res, next) {
    if (req.body.new_password1 !== req.body.new_password2) {
        next(ERRORTYPE.customError('Error: the two passwords are different', 'DIFFERENT PASSWORD' , 412));
    } else {
        modelMember.match(req.body.member_id, req.body.old_password).then(function (data) {
            if (!data) {
                next(ERRORTYPE.customError('Error: wrong password', 'WRONG PASSWORD', 403));
            } else {
                next();
            }
        }).catch(next);
    }
}

module.exports = router;
