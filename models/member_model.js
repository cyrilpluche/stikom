const db = require('../config/db_config')
const bcrypt = require('bcrypt');
const ERRORTYPE = require('../policy/errorType');

const member = {
    insert: function (/* parameter */) {

    },
    match: function (mail, password) {
        return db.any('SELECT * FROM public.member WHERE member_mail = $1', mail)
            .then(function (data) {
                if (data.length === 0) {
                    return Promise.reject(ERRORTYPE.WRONG_IDENTIFIER)
                } else {
                    return bcrypt.compare(password, data[0].member_password).then(function (r) {
                        if (r) {
                            return data[0].member_password
                        } else {
                            return Promise.reject(ERRORTYPE.WRONG_IDENTIFIER)
                        }
                    })
                }
            }).catch(function (err) {
                if(err.type){
                    return Promise.reject(err)
                } else {
                    return Promise.reject(ERRORTYPE.customError('The server has encountred an internal error'))
                }
            })
    },
    findOne: function () {

    },
    getAll: function () {
        
    }
}
module.exports = member