const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');


let job = {
    insert (job) {
        return db.any('INSERT INTO public.job(job_name, job_code, sop_id)\n' +
            'VALUES (${job_name}, ${job_code}, ${sop_id}) returning job_id;', job)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
            })
    },

    insertActivityIsJob (activity_id, job_id) {
        return db.any('INSERT INTO public.activity_is_job(job_id, activity_id)\n' +
            'VALUES (${j}, ${a}) returning job_id, activity_id;',
            {a: activity_id, j: job_id})
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
            })
    },

    selectById (job_id) {
        return db.any('SELECT * FROM public.job WHERE job_id = $1', job_id)
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
    },

    selectAllBySopId (sop_id) {
        return db.any('SELECT * FROM public.job WHERE sop_id = $1', sop_id)
            .then(function (data) {
                return data
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
            })
    },

    selectAllByProjectId (project_id) {
        return db.any('SELECT * FROM public.job J, public.project_has_job PHJ, public.sop S\n' +
            'WHERE J.job_id = PHJ.job_id AND PHJ.project_id = $1  AND S.sop_id = J.sop_id',
            project_id)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
            })
    },

    selectAllByActivityId (activity_id) {
        return db.any('SELECT * \F' +
            'ROM public.job J, public.activity_is_job AIS\n' +
            'WHERE J.job_id = AIS.job_id AND AIS.activity_id = $1',
            activity_id).then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data
            }
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
        })
    },

    update (job) {
        return db.any('UPDATE public.job\n' +
            'SET job_id=${job_id}, job_name=${job_name}, job_code=${job_code}\n' +
            'WHERE sop_id = ${sop_id}',job).then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data[0]
            }
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());

        });
    },

    deleteNoneSuperJobByActivityId (activity_id) {
        return db.any(
            'DELETE FROM public.job J \n' +
            'WHERE EXISTS (\n' +
            'SELECT * FROM public.activity_is_job AIJ, public.activity A\n' +
            'WHERE AIJ.activity_id = $1 AND AIJ.job_id = J.job_id AND \n' +
            'A.activity_id = AIJ.activity_id AND A.activity_type != $2 \n' +
            ')\n' +
            'returning J.job_id;',
            [activity_id, 'sop'])
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());
            });
    },

    deletebyJobIdAndActivityId (job_id, activity_id) {
        return db.any('DELETE FROM public.job J\n' +
            'WHERE J.job_id != $1 AND EXISTS (\n' +
            'SELECT * FROM public.activity_is_job AIJ\n' +
            'WHERE AIJ.activity_id = $2 AND AIJ.job_id = J.job_id\n' +
            ')returning J.job_id;',
            [job_id, activity_id])
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());
            });
    }
};

module.exports = job;