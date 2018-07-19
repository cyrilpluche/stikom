const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let project = {
    insert (project) {
        return db.any('INSERT INTO public.project(project_title, project_code, project_work_code, project_start,\n' +
            'project_end, sub_department_id)\n' +
            'VALUES (${project_title}, ${project_code}, ${project_work_code}, ${project_start}, ${project_end},\n' +
            '${sub_department_id}) returning project_id;', project)
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

    insertProjectHasJob (project_id, job_id) {
        return db.any('INSERT INTO public.project_has_job(job_id, project_id)\n' +
            'VALUES (${job}, ${project}) returning job_id, project_id;',
            {job: job_id, project: project_id}) .then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data[0]
            }
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
        })
    },

    insertMemberUnitProject (unit_id, project_id, member_id, job_id) {
        return db.any('INSERT INTO public.member_unit_project(unit_id, project_id, member_id, job_id)\n' +
            'VALUES (${unit}, ${project}, ${member}, ${job}) returning unit_id, project_id, member_id;',
            {unit: unit_id, project: project_id, member: member_id, job: job_id}) .then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data[0]
            }
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
        })
    },

    insertMemberActivityProject (data) {
        return db.any('INSERT INTO public.member_activity_project(\n' +
            'project_id, member_id, activity_id, job_id, target_date, date_begin, evaluation, finished_date, sign, note,\n' +
            'target_quantity, finished_quantity, finished_duration)\n' +
            'VALUES (${project_id}, ${member_id}, ${activity_id}, ${job_id}, ${target_date}, ${date_begin}, ${evaluation}, \n' +
            '${finished_date}, ${sign}, ${note}, ${target_quantity},${finished_quantity}, ${finished_duration})\n' +
            'returning project_id, member_id, activity_id, job_id;', data)
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

    selectAll () {
      return db.any('SELECT * FROM public.project').then(function (data) {
          return data
      }).catch(function (err) {
          throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
      })
    },

    selectAllBySopId (sop_id) {
        return db.any('SELECT P.project_id, P.project_title, P.project_code, P.project_work_code, P.project_start, \n' +
            'P.project_end, P.sub_department_id\n' +
            'FROM public.project P, public.project_has_job PHJ, public.job J\n' +
            'WHERE P.project_id = PHJ.job_id AND PHJ.job_id = J.job_id AND J.sop_id = $1',
            sop_id).then(function (data) {
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

    selectAllMemberActivityProjectByProject_id (project_id) {
        return db.any('SELECT * FROM public.member_activity_project WHERE project_id = $1', project_id)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
            });
    },

    selectAllIdMemberActivityProjectByProject_id (project_id) {
        return db.any('SELECT DISTINCT activity_id, job_id FROM public.member_activity_project WHERE project_id = $1',
            project_id)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
            });
    },

    selectById (project_id) {
        return db.any('SELECT * FROM public.project WHERE project_id = $1', project_id)
            .then(function (data) {
                if (data.length === 0) {
                    return false
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

    updateMemberActivityProject (member_activity_project) {
        return db.any('UPDATE public.member_activity_project\n' +
            'SET target_date=${target_date}, date_begin=${date_begin}, evaluation=${evaluation},\n' +
            'finished_date=${finished_date}, sign=${sign}, note=${note}, target_quantity=${target_quantity},\n' +
            'finished_quantity=${finished_quantity}, finished_duration=${finished_duration}\n' +
            'WHERE project_id= ${project_id} AND activity_id = ${activity_id} AND member_id = ${member_id} AND\n' +
            'job_id = ${job_id}\n' +
            'returning member_id, activity_id, project_id, job_id',
            member_activity_project)
            .then(function (data) {
                if (data.length === 0) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());
            })
    },

    delete (project_id) {
        return db.any('DELETE from public.project CASCADE WHERE project_id = $1 returning project_id', project_id)
            .then(function (data) {
                return data.length !== 0
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    }
};

module.exports = project;