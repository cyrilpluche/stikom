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
            'member_first_name, member_name, member_mail, member_password, member_admin, member_valid, sub_department_id,\n' +
            ' seed, managment_level_id)\n' +
            'VALUES (${first_name}, ${name}, ${mail}, ${hash_pwd}, ${is_admin}, ${member_valid}, ${sub_department_id},\n' +
            ' ${seed}, ${managment_level_id}) returning member_id;',
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
                            return false
                        }
                    })
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
            })
    },

    /**
     * valid a member
     * @param member_id
     *  - 1 the user can connect
     *  - 0 the user hasn't validate his mail yet
     *  - 2 the user has validate his mail
     * @returns {*}
     */
    validate_login: function (member_id) {
        return db.any('Update public.member SET member_valid = 1 WHERE member_id = $1 returning member_id, member_mail',
            [member_id])
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

    /**
     *
     * @param seed
     */
    validate_seed (seed) {
        return db.any('Update public.member SET member_valid = 2, seed = NULL WHERE seed = $1 returning member_id, member_mail',
            [seed]).then(function (data) {
            if (data.length === 0) {
                throw ERRORTYPE.MEMBER_NOT_FOUND
            } else {
                return data[0]
            }
        }).catch(function (err) {
            if (err.type) { // means that it comes from a then
                throw err
            } else {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            }
        })
    },

    /**
     * check if an user exists according to the mail
     * @param mail
     * @returns {*}
     */
    existByMail (mail) {
        return db.any('SELECT member_id FROM public.member WHERE member_mail = $1', mail)
            .then(function (data) {
                return data.length !== 0
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    },

    existsBySeed (seed) {
        return db.any('SELECT member_id FROM public.member WHERE seed = $1', seed).then(function (data) {
            return data.length !== 0
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    },

    selectById: function (member_id) {
        return db.any('SELECT * FROM public.member WHERE member_id = $1', [member_id])
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.MEMBER_NOT_FOUND
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                if (err.type) { // means that it comes from a then
                    throw (err)
                } else {
                    throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
                }
            })
    },

    /**
     * select all member except admin
     * @returns {*}
     */
    selectAll: function () {
        return db.any('SELECT member_id, member_first_name, member_name, member_admin, member_mail, member_valid, \n' +
            'sub_department_id, managment_level_id, member_role(member_id) \n' +
            'FROM public.member\n' +
            'GROUP BY member_first_name, member_name, member_admin, member_mail, member_valid, sub_department_id, member_id, \n' +
            'managment_level_id').then(function (data) {
            return data
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    },

    selectAllAdmin () {
        return db.any('SELECT * FROM public.member WHERE member_admin = 1').then(function (data) {
            return data
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    },

    selectUnvalidateAccount () {
      return db.any('SELECT * FROM public.member WHERE member_admin = 0 AND member_valid = 2').then(function (data) {
          return data
      }).catch(function (err) {
          throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
      })
    },

    /**
     *
     * @param member_mail
     * @param password: already hash password
     * @returns {*}
     */
    updatePassword (member_mail, password) {
        return db.any('UPDATE public.member SET member_password = ${pwd} WHERE member_mail = ${member} \n' +
            'returning member_id',
            {member: member_mail, pwd: password})
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    }
};
module.exports = member;