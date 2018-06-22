// define type of erreur

const errors = {
    FORBIDDEN: {type: 'FORBIDDEN', message: 'User try to do something he isn\'t granted do', status: 403},
    MISSING_PARAMETER: {type: 'MISSING_PARAMETER', message: 'One or several parameters are missing', status: 400},
    INVALID_FORM_MAIL: {type: 'INVALID_FORM_MAIL', message: 'The email address is not valid', status: 400},
    VALIDATION_REQUIRED: {type: 'VALIDATION_REQUIRED', message: 'This account hasn\'t been activated yet', status: 403},
    WRONG_IDENTIFIER: {type: 'WRONG_IDENTIFIER', message: 'Login failed: Invalid mail or password', status: 401},
    MEMBER_NOT_FOUND: {type: 'MEMBER_NOT_FOUND', message: 'Coudn\'t find this member', status: 404},
    NOT_FOUND: {type: 'NOT_FOUND', message: 'Coudn\'t find this ressource', status: 404},
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