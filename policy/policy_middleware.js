// contains middleware that will check some condition before giving acces to other
const validator = require("email-validator");
const ERROR_TYPE = require('./errorType')

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
    checkRight: function (req, res, next) {
        // will check if the user has right to do what he aimed to do
        // TODO maybe split this function into differents function to handle different level of right
    },
    checkParameters (expectedParameter) {
        return function (req, res, next) {
            let conform = true
            for (let i = 0; i < expectedParameter.length; i++) {
                if (req.body[expectedParameter[i]] === undefined) {
                    conform = false
                }
            }
            if (conform) next()
            else next(ERROR_TYPE.MISSING_PARAMETER)
        }
    },
    test: function (test) { // just a test
        return function (req, res, next) {
            req.body.age = 10
            console.log({test: test+'\n\n', requete: req})
            next()
        }
    }
}

module.exports = policies