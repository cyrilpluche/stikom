const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let branch = {
    insert (branch) {
        return db.any('INSERT INTO public.branch ( branch_name, organisation_id)\n' +
            'VALUES (${branch_name}, ${organisation_id}) returning branch_id', branch).then(function (data) {
            if (!data) {
                return false
            } else {
                return data[0]
            }
        }).catch(function (err) {
            throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
        })
    },
    selectAllByOrganisationId (organisation_id) {
        return db.query('SELECT * FROM public.branch WHERE organisation_id = $1', organisation_id)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.customError('Error: This organisation doesn\'t exist \n' +
                        'or there aren\'t any branch in it', 'NOT EXISTS', 404)
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