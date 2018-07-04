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

    selectAll () {
      return db.any('SELECT * FROM public.project').then(function (data) {
          return data
      }).catch(function (err) {
          throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
      })
    },

    selectAllBySopId (sop_id) {
        return db.any('SELECT ', sop_id).then(function (data) {
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

    selectById (project_id) {
        return db.any('SELECT * FROM public.project WHERE project_id = $1', project_id)
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