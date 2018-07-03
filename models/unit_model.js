const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let unit = {
    insert (unit) {
        return db.any('INSERT INTO public.unit(unit_name)\n' +
            'VALUES (${unit_name}) returning unit_id;',unit).then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data[0]
            }
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    },

    selectAllBySopId (sop_id) {
        return db.any('SELECT U.unit_id, U.unit_name\n' +
            'FROM public.unit U, public.sop_needs_unit SNU\n' +
            'WHERE U.unit_id = SNU.unit_id AND SNU.sop_id = $1', sop_id)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    return data
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

module.exports = unit;
