const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let activity = {
    insert  (activity) {
        return db.any('INSERT INTO public.activity(\n' +
            'activity_type_duration, activity_duration, activity_type, activity_type_output, activity_description,\n' +
            'activity_shape, activity_id_is_father, sop_id)\n' +
            'VALUES (${activity_type_duration}, ${activity_duration}, ${activity_type}, ${activity_type_output},\n' +
            '${activity_description}, ${activity_shape}, ${activity_id_is_father}, ${sop_id}) returning activity_id;',
            activity).then(function (data) {
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
        return db.any('SELECT * FROM public.activity WHERE sop_id = $1', sop_id)
            .then(function (data) {
                return data
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    }
};

module.exports = activity;