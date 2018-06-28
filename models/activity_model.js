const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let activity = {
    insert  (activity) {
        console.log(activity)
        return db.any('INSERT INTO public.activity(\n' +
            'activity_title, activity_type_duration, activity_duration, activity_type, activity_type_output, activity_description,\n' +
            'activity_shape, activity_id_is_father, sop_id)\n' +
            'VALUES (${activity_title}, ${activity_type_duration}, ${activity_duration}, ${activity_type}, ${activity_type_output},\n' +
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
    },

    update (activity) {
        return db.any('UPDATE public.activity\n' +
            'SET activity_title=${activity_title}, activity_type_duration=${activity_type_duration}, \n ' +
            'activity_duration=${activity_duration}, activity_type=${activity_type}, \n ' +
            'activity_type_output=${activity_type_output}, activity_description=${activity_description},\n' +
            'activity_shape=${activity_shape}, activity_id_is_father=${activity_id_is_father}, sop_id=${sop_id}\n' +
            'WHERE activity_id = ${activity_id} returning activity_id', activity)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    },
    delete (activity_id) {
        return db.any('DELETE from public.activity WHERE activity_id = $1 returning activity_id', activity_id)
            .then(function (data) {
                return data.length !== 0
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    }
};

module.exports = activity;