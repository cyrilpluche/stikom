const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let department = {
    selectAllByDepartmentId (department_id) {
        return db.any('SELECT * FROM public.sub_department WHERE department_id = $1', department_id)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.customError('This department doesn\'t exist', 'NOT EXISTS', 404)
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
    }
}

module.exports = department;