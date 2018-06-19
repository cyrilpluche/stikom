// contains middleware that will check some condition before giving acces to other
const validator = require("email-validator");
const ERROR_TYPE = require('./errorType');
const jwtHelper = require('../helpers/jwtHelpers')


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
                if (req.body[expectedParameter[i]] === undefined) {
                    conform = false
                }
            }
            if (conform) next();
            else next(ERROR_TYPE.MISSING_PARAMETER)
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
                next(ERROR_TYPE.NO_RIGHT)
            } else if (decode.member_admin === 0){
                next(ERROR_TYPE.NO_RIGHT)
            } else {
                next()
            }
        })
    },

    /**
     * We are expected this user to get this right before accessing to a ressource
     * @param right
     * @returns {Function}
     */
    requireRight: function check (right) {
        return check[right] || (check[right] = function (req, res, next) {
            jwtHelper.jwtDecode(req, function (err, decode) {
                if (err) {
                    next(ERROR_TYPE.NO_RIGHT)
                } else if (!decode.role.includes(right)){
                    next(ERROR_TYPE.NO_RIGHT)
                } else {
                    next()
                }
            })
            // will check if the user has right to do what he aimed to do
            // TODO maybe split this function into differents function to handle different level of right
        })
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