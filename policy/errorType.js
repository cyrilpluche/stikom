// define type of erreur

const errors = {
    NO_RIGHT: {type: 'NO_RIGHT', message: 'User try to do something he isn\'t granted do', status: 403},
    MISSING_PARAMETER: {type: 'MISSING_PARAMETER', message: 'One or several parameters are missing', status: 400},
    INVALID_FORM_MAIL: {type: 'INVALID_FORM_MAIL', message: 'The email address is not valid', status: 400},
    WRONG_IDENTIFIER: {type: 'WRONG_IDENTIFIER', message: 'Login failed; Invalid mail or password', status: 401},
    INTERNAL_ERROR: {type: 'INTERNAL_ERROR', message: 'The server encountred an internal error', status: 500},
    customError: function (errorMessage, type, status) {
        return {
            type: type || 'INTERNAL_ERROR',
            message: errorMessage,
            status: status || 500
        }
    }
}

module.exports = errors