const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let role = {
    selectAll () {
        return db.any('SELECT * FROM public.role').then(function (data) {
            return data
        }).catch(function (err) {
            throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
        })
    },

    selectRoleFromMember (member_id) {
        return db.any('SELECT member_role($1), member_admin FROM public.member \n' +
            'WHERE member_id = $1 GROUP BY member_id, member_admin', member_id).then(function (data) {
            return data[0]
        }).catch(function (err) {
            throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
        })
    },
    insertHasRole (member, role) {
        return db.any('INSERT INTO public.has_role (member_id, role_id) VALUES (${member}, ${role})',
            {member: member, role: role})
            .then(function (data) {
                return true
            }).catch(function (err) {
                throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
            })
    }
};

module.exports = role;