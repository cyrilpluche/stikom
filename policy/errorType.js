// define type of erreur

const errors = {
    NO_RIGHT: {type: 'NO_RIGHT', message: 'User try to do something he isn\'t granted do', status: 403},
    MISSING_PARAMETER: {type: 'MISSING_PARAMETER', message: 'One or several parameters are missing', status: 500},
    INVALID_FORM_MAIL: {type: 'INVALID_FORM_MAIL', message: 'The email address is not valid', status: 500}

}

module.exports = errors