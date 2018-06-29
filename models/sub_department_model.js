const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let department = {
    insert (sub_department) {
        return db.any('INSERT INTO public.sub_department (sub_department_name, department_id)\n' +
            ' VALUES (${sub_department_name}, ${department_id}) returning sub_department_id', sub_department)
            .then(function (data) {
                if (!data) {
                    return false
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
            })
    },

    selectAllByDepartmentId (department_id) {
        return db.any('SELECT * FROM public.sub_department WHERE department_id = $1', department_id)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.customError('Error: This department doesn\'t exist \n' +
                        'there aren\'t any sub_department in it', 'NOT EXISTS', 404)
                } else {
                    return data
                }
            }).catch(function (err) {
                if (err.type) { // means that it comes from a then
                    throw (err)
                } else {
                    throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
                }
            })
    },

    delete (sub_department_id) {
        return db.any('DELETE FROM public.sub_department CASCADE WHERE sub_department_id = $1\n' +
            'returning sub_department_id', sub_department_id).then(function (data) {
            return data.length !== 0
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    }
};

module.exports = department;