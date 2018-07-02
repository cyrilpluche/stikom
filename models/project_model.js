const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let project = {
    insert (project) {
        return db.any('INSERT INTO public.project(project_title, project_code, project_work_code, sub_department_id)\n' +
            'VALUES (${project_title}, ${project_code}, ${project_work_code}, ${sub_department_id}) \n' +
            'returning project_id;', project)
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
    }
};

module.exports = project;