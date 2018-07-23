const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let role = {
    selectAll () {
        return db.any('SELECT * FROM public.role')
            .then(function (data) {
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
    insertHasRole (member, role_id) {
        return db.any('INSERT INTO public.has_role (member_id, role_id) VALUES (${member}, ${role})',
            {member: member, role: role_id})
            .then(function (data) {
                return true
            }).catch(function (err) {
                throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
            })
    },

    deleteMemberRoleByRoleTitle (member_id, role_title) {
        return db.any('DELETE FROM public.has_role HR \n' +
            'WHERE EXISTS (\n' +
            'SELECT * FROM public.role R\n' +
            'WHERE HR.member_id = $1 AND HR.role_id = R.role_id AND R.role_title = $2\n' +
            ') returning HR.member_id',
            member_id, role_title)
            .then(function (data) {
                return data.length !== 0
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    }
};

module.exports = role;