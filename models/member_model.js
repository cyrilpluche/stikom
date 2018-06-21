const db = require('../config/db_config');
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
            'member_first_name, member_name, member_mail, member_password, member_admin, member_valid, sub_department_id, seed)\n' +
            'VALUES (${first_name}, ${name}, ${mail}, ${hash_pwd}, ${is_admin}, ${member_valid}, ${sub_department_id}, ${seed}) returning member_id;',
            member)
            .then(function (data) {
                if (data.length === 0) {
                    throw (ERRORTYPE.INTERNAL_ERROR)
                } else {
                    return data[0]
                }
            })
            .catch(function (err) {
                if (err.type) { // means that it comes from a then
                    throw (err)
                } else {
                    throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
                }
            })
    },

    /**
     * check if a member match all the champ given by the object given in parameter
     * @param member
     * @returns {*}
     */
    exists (member) {
        return db.any('SELECT * FROM public.member \n' +
            'WHERE member_id = ${member_id} AND member_first_name = ${member_first_name}\n ' +
            'AND member_name = ${member_name} AND member_mail = ${member_mail}\n' +
            'AND member_admin = ${member_admin} ' +
            'AND member_valid = ${member_valid} AND sub_department_id = ${sub_department_id}', member)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            })
            .catch(function (err) {
                if (err.type) { // means that it comes from a then
                    throw err;
                } else {
                    throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());
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
            'M.member_admin, M.member_valid, M.sub_department_id ,M.seed, member_role(M.member_id)\n' +
            'FROM public.member M\n' +
            'WHERE M.member_mail = $1\n' +
            ' group by M.member_id, M.member_first_name, M.member_name, M.member_password, M.member_mail,\n' +
            'M.member_admin, M.member_valid, M.sub_department_id, M.seed', mail)
            .then(function (data) {
                if (data.length === 0) { // if no member are found
                    return false
                } else {
                    return bcrypt.compare(password, data[0].member_password).then(function (r) {
                        if (r) {
                            return data[0]
                        } else {
                            throw ERRORTYPE.WRONG_IDENTIFIER
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

    /**
     * valid a member
     * @param member_id
     * @param valid: state in which we valid the user:
     *  - 1 the user can connect
     *  - 0 the user hasn't validate his mail yet
     *  - 2 the user has validate his mail
     * @returns {*}
     */
    validate_login: function (member_id, valid) {
        return db.any('Update public.member SET member_valid = $2, seed = NULL WHERE member_id = $1 returning member_id',
            [member_id, valid])
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.MEMBER_NOT_FOUND
                } else {
                    return data[0]
                }
            })
            .catch(function (err) {
                if (err.type) { // means that it comes from a then
                    throw err
                } else {
                    throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
                }
            })
    },

    existByMail (mail) {
        return db.any('SELECT member_id FROM public.member WHERE member_mail = $1', mail)
            .then(function (data) {
                return data.length !== 0
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    },
    findOne: function (member_id) {

    },
    selectAll: function () {
        
    }
};
module.exports = member;