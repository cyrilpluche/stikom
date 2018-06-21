const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let department = {
    selectAllByBranchId (branch_id) {
        return db.any('SELECT * FROM public.department WHERE branch_id = $1', branch_id)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.customError('Error: The branch you are searching doesn\'t exist or \n there aren\'t' +
                        'any department in it', 'NOT EXISTS', 404)
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