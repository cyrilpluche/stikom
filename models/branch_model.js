const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let branch = {
    selectAllByOrganisationId (organisation_id) {
        return db.query('SELECT * FROM public.branch WHERE organisation_id = $1', organisation_id)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.customError('This organisation doesn\'t exist', 'NOT EXISTS', 404)
                } else {
                    return data
                }
            }).catch(function (er) {
                if (err.type) { // means that it comes from a then
                    throw (err)
                } else {
                    throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
                }
            })
    }
};

module.exports = branch;