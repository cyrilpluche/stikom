const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let activity = {
    insert  (activity) {
        return db.any('INSERT INTO public.activity(\n' +
            'activity_title, activity_type_duration, activity_duration, activity_type, activity_type_output, activity_description,\n' +
            'activity_shape, activity_id_is_father, sop_id, managment_level_id)\n' +
            'VALUES (${activity_title}, ${activity_type_duration}, ${activity_duration}, ${activity_type}, ${activity_type_output},\n' +
            '${activity_description}, ${activity_shape}, ${activity_id_is_father}, ${sop_id}, ${managment_level_id})\n' +
            'returning activity_id;',
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
    },

    /**
     * All the activity for one job
     * @param job_id
     * @returns {*}
     */
    selectAllByJobId (job_id) {
        return db.any('SELECT A.activity_id, A.activity_title, A.activity_type_duration, A.activity_duration,\n' +
            'A.activity_type, A.activity_type_output, A.activity_description, A.activity_shape, A.sop_id,\n' +
            'A.managment_level_id, A.activity_id_is_father \n' +
            'FROM public.activity A, public.activity_is_job ASJ\n' +
            'WHERE A.activity_id = ASJ.activity_id AND ASJ.job_id = $1', job_id)
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
    },

    selectAllByUnitId (unit_id) {
        return db.any('SELECT * FROM public.activity A, public.execute E\n' +
            'WHERE A.activity_id = E.activity_id AND E.unit_id = $1', unit_id)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    },

    selectAllByProjectId (project_id) {
        return db.any('SELECT * \n' +
            'FROM public.activity A, public.member_activity_project MAP\n' +
            'WHERE A.activity_id = MAP.activity_id AND MAP.activity_project = $1', project_id)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    },

    selectById (activity_id) {
        return db.any('SELECT * FROM public.activity WHERE activity_id = $1', activity_id).then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data[0]
            }
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
        return db.any('DELETE from public.activity CASCADE WHERE activity_id = $1 returning activity_id', activity_id)
            .then(function (data) {
                return data.length !== 0
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    }
};

module.exports = activity;