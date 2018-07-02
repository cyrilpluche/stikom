const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');


let job = {
    selectById (job_id) {
        return db.any('SELECT * FROM public.job WHERe job_id = $1', job_id)
            .then(function (data) {
            if (data.length === 0) {
                throw ERRORTYPE.NOT_FOUND
            } else {
                return data[0]
            }
        }).catch(function (err) {
            if (err.type) { // means that it comes from a then
                throw err;
            } else {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());
            }
        })
    }
};

module.exports = job;