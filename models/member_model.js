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
            'VALUES (${first_name}, ${name}, ${mail}, ${hash_pwd}, ${is_admin}, ${member_valid}, ${sub_department_id}) returning member_id;',
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
    /**
     * Check if the member exists and if the password match
     * @param mail
     * @param password
     * @returns {*}
     */
    match: function (mail, password) {
        return db.any('SELECT M.member_id, M.member_first_name, M.member_name, M.member_password, M.member_mail,\n' +
            'M.member_admin, M.member_valid, M.sub_department_id ,member_role(M.member_id)\n' +
            'FROM public.member M\n' +
            'WHERE M.member_mail = $1\n' +
            ' group by M.member_id, M.member_first_name, M.member_name, M.member_password, M.member_mail,\n' +
            'M.member_admin, M.member_valid, M.sub_department_id ', mail)
            .then(function (data) {
                if (data.length === 0) { // if no member are found
                    return Promise.reject(ERRORTYPE.WRONG_IDENTIFIER) // reject to catch
                } else if (data[0].member_valid === 0) { // a member needs to be valid if he wants to login
                    return Promise.reject(ERRORTYPE.VALIDATION_REQUIRED)
                } else {
                    return bcrypt.compare(password, data[0].member_password).then(function (r) {
                        if (r) {
                            data[0].member_password = undefined; // we don't want to send the pwd to the client
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
    validate: function (member_id) {
        return db.any('Update public.member SET member_valid = 1 WHERE member_id = $1 returning member_id', [member_id])
            .then(function (data) {
                if (data.length === 0) {
                    return Promise.reject(ERRORTYPE.MEMBER_NOT_FOUND)
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
    findOne: function () {

    },
    getAll: function () {
        
    }
};
module.exports = member;