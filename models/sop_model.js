const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let sop = {
    insert: function (sop) {
        return db.any('INSERT INTO public.sop(\n' +
            'sop_title, sop_creation, sop_revision, sop_published, sop_approvment,\n' +
            'sop_rules, sop_warning, sop_staff_qualification, sop_tools, sop_type_reports, sop_objectives)\n' +
            'VALUES (${sop_title}, ${sop_creation}, ${sop_revision}, ${sop_published}, ${sop_approvment}, ${sop_rules}, \n' +
            '${sop_warning}, ${sop_staff_qualification}, ${sop_tools}, ${sop_type_reports}, ${sop_objectives}) returning sop_id;', sop)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    return data[0]
                }
            })
            .catch(function (err) {
                if (err.type) { // means that it comes from a then
                    throw err
                } else {
                    throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());
                }
            })
    },
    selectAll: function () {
        return db.any('SELECT * FROM public.sop').then(function (data) {
            return data
        }).catch(function (err) {
            return Promise.reject(ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
        })
    },

    selectOne (soap_id) {

    }
};
module.exports = sop
