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

    insertExecute (unit_id, activity_id) {
        return db.any('INSERT INTO public.execute(activity_id, unit_id)\n' +
            'VALUES (${activity}, ${unit}) returning activity_id, unit_id;',
            {unit: unit_id, activity: activity_id}).then(function (data) {
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
    },

    selectAllByJobId (job_id) {
        return db.any('SELECT Distinct U.unit_id, U.unit_name\n' +
            'FROM public.unit U, public.execute E, public.activity_is_job ASJ\n' +
            'WHERE U.unit_id = E.unit_id AND ASJ.activity_id = E.activity_id AND ASJ.job_id = $1',
            job_id).then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data
            }
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    },

    selectAllByJActivityId (activity_id) {
        return db.any('SELECT Distinct U.unit_id, U.unit_name\n' +
            'FROM public.unit U, public.execute E\n' +
            'WHERE U.unit_id = E.unit_id AND E.activity_id = $1', activity_id).then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data
            }
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    },

    update (unit_id, unit_name) {
        return db.any('UPDATE public.unit\n' +
            'SET unit_name=${unit_name}\n' +
            'WHERE unit_id=${unit_id} returning unit_id;',
            {unit_id: unit_id, unit_name: unit_name})
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

    updateExecute (unit_id, activity_id) {
        return db.any('UPDATE public.execute\n' +
            'SET unit_id=${unit_id}\n' +
            'WHERE activity_id=${activity_id} returning unit_id, activity_id;',
            {unit_id: unit_id, activity_id: activity_id})
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    }
};

module.exports = unit;
