// contains middleware that will check some condition before giving acces to other
const validator = require("email-validator");
const ERROR_TYPE = require('./errorType');
const jwtHelper = require('../helpers/jwtHelpers');
const basicMethods = require('../helpers/basicMethodsHelper');
const modelRole = require('../models/role_model');


const policies = {
    emailValidator: function (req, res, next) {
        if (req.body.mail !== undefined || req.body.mail != null) {
            if (validator.validate(req.body.mail)) {
                next()
            } else {
                next(ERROR_TYPE.INVALID_FORM_MAIL)
            }
        } else {
            next(ERROR_TYPE.MISSING_PARAMETER)
        }
    },

    /**
     * Check if the required parameters are existing
     * @param expectedParameter: a table of all expected parameters
     * @returns {Function}
     */
    checkParameters: function check(expectedParameter) {
        // make sure that I don't make multiple copies of the same function
        return check[expectedParameter] || (check[expectedParameter] = function (req, res, next) {
            let conform = true
            for (let i = 0; i < expectedParameter.length; i++) {
                console.log(expectedParameter[i])
                if (req.body[expectedParameter[i]] === undefined &&
                    req.query[expectedParameter[i]] === undefined
                    && req.params[expectedParameter[i]] === undefined) { // the parameter doesn't exist
                    conform = false
                }
            }
            if (conform) next();
            else next(ERROR_TYPE.MISSING_PARAMETER);
        });
    },

    /**
     * Means that only a admin can access to ressources
     * @param req
     * @param res
     * @param next
     */
    requireAdmin: function (req, res, next) {
        jwtHelper.jwtDecode(req, function (err, decode) {
            if (err) {
                next(ERROR_TYPE.FORBIDDEN)
            } else if (decode.member_admin === 0){
                next(ERROR_TYPE.FORBIDDEN)
            } else {
                next()
            }
        })
    },

    /**
     * We are expecting this user to get this right before accessing to a ressource
     * @param right: an  array of String or a simple String
     * @returns {Function}
     */
    requireSpecificRight: function check (right) {
        return check[right] || (check[right] = function (req, res, next) {
            jwtHelper.jwtDecode(req, function (err, decode) {
                if (err) {
                    next(ERROR_TYPE.FORBIDDEN)
                } else {
                    console.log(decode)
                    modelRole.selectRoleFromMember(decode.member_id)
                        .then(function (data) {
                                if (decode.member_admin !== 1 &&
                                    (data.member_role === undefined || data.member_role == null
                                        || !basicMethods.arrayContains(data.member_role, right)))
                                {
                                    next(ERROR_TYPE.FORBIDDEN)
                                } else {
                                    next()
                                }
                            })
                        .catch(next)
                }
            })
            // will check if the user has right to do what he aimed to do
            // TODO maybe split this function into differents function to handle different level of right
        })
    },

    requiresNoAuthenticateUser (req, res, next) {
        if (jwtHelper.jwtCheckToken(req)) {
            next(ERROR_TYPE.customError('Error: you are already connected you cannot do this', 'ALREADY CONNECTED', 403))
        } else next();
    },

    test: function (test) { // just a test
        return function (req, res, next) {
            req.body.age = 10
            console.log({test: test+'\n\n', requete: req});
            next()
        }
    }
}

module.exports = policies