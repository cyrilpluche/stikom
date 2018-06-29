const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');


let organisation = {
    insert (organisation) {
        return db.any('INSERT INTO public.organisation (organisation_name)\n' +
            ' VALUES (${organisation_name}) returning organisation_id', organisation).then(function (data) {
            if (!data) {
                return false
            } else {
                return data[0]
            }
        }).catch(function (err) {
            throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
        })
    },
    selectAll: function () {
        return db.any('SELECT * FROM public.organisation').then(function (data) {
            return data
        }).catch(function (err) {
            throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
        })
    },

    delete (organisation_id) {
        return db.any('DELETE FROM public.organisation CASCADE WHERE organisation_id = $1 \n' +
            'returning organisation_id', organisation_id).then(function (data) {
            return data.length !== 0
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    }
};
module.exports = organisation