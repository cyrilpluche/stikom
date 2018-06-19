const db = require('../config/db_config')
const bcrypt = require('bcrypt');
const ERRORTYPE = require('../policy/errorType');

const member = {
    /**
     * Insert in the table member
     * @param member: A javascript object, field have to respect the same name as
     * @returns {*}
     */
    insert: function (member) {
        return db.any('INSERT INTO public.member(\n' +
            'member_first_name, member_name, member_mail, member_password, member_admin, member_valid, sub_department_id)\n' +
            'VALUES (${first_name}, ${name}, ${mail}, ${hash_pwd}, ${admin_id}, ${member_valid}, ${sub_department_id}) returning member_id;',
            member)
            .then(function (data) {
                if (data.length === 0) {
                    return Promise.reject(ERRORTYPE.INTERNAL_ERROR)
                } else {
                    return data[0]
                }
            })
            .catch(function (err) {
                if (err.type) { // means that it comes from a then
                    return Promise.reject(err)
                } else {
                    return Promise.reject(ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
                }
            })
    },
    match: function (mail, password) {
        return db.any('SELECT * FROM public.member WHERE member_mail = $1', mail)
            .then(function (data) {
                if (data.length === 0) { // if no member are found
                    return Promise.reject(ERRORTYPE.WRONG_IDENTIFIER) // reject to catch
                } else {
                    return bcrypt.compare(password, data[0].member_password).then(function (r) {
                        if (r) {
                            return data[0]
                        } else {
                            return Promise.reject(ERRORTYPE.WRONG_IDENTIFIER)
                        }
                    })
                }
            }).catch(function (err) {
                if(err.type){ // if the error is an object and has a type
                    return Promise.reject(err)
                } else {
                    return Promise.reject(ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString()))
                }
            })
    },
    findOne: function () {

    },
    getAll: function () {
        
    }
}
module.exports = member