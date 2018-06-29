const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let department = {
    insert (department) {
        return db.any('INSERT INTO public.department ( department_name, branch_id)\n' +
            ' VALUES (${department_name}, ${branch_id}) returning department_id', department).then(function (data) {
            if (!data) {
                return false
            } else {
                return data[0]
            }
        }).catch(function (err) {
            throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
        })
    },

    selectAllByBranchId (branch_id) {
        return db.any('SELECT * FROM public.department WHERE branch_id = $1', branch_id)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.customError('Error: The branch you are searching doesn\'t exist or \n there aren\'t' +
                        ' any department in it', 'NOT EXISTS', 404)
                } else {
                    return data
                }
            }).catch(function (err) {
                if (err.type) { // means that it comes from a then
                    throw (err)
                } else {
                    throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
                }
            })
    },

    delete (department_id) {
        return db.any('Delete FROM public.department CASCADE WHERE department_id = $1\n' +
            'returning department_id', department_id).then(function (data) {
            return data.length !== 0
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    }
};

module.exports = department;