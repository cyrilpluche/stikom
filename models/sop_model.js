const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let sop = {
    insert: function (sop) {
        return db.any('INSERT INTO public.sop(\n' +
            'sop_title, sop_creation, sop_revision, sop_published, sop_approvment,\n' +
            'sop_rules, sop_warning, sop_staff_qualification, sop_tools, sop_type_reports, sop_objectives, sop_valid)\n' +
            'VALUES (${sop_title}, ${sop_creation}, ${sop_revision}, ${sop_published}, ${sop_approvment},\n' +
            '${sop_rules}, ${sop_warning}, ${sop_staff_qualification}, ${sop_tools}, ${sop_type_reports},\n' +
            '${sop_objectives}, ${sop_valid}) returning sop_id;', sop)
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

    insertSopNeedsUnit (sop_id, unit_id) {
        return db.any('INSERT INTO public.sop_needs_unit(sop_id, unit_id)\n' +
            'VALUES (${sop}, ${unit}) returning sop_id, unit_id;',{sop: sop_id, unit: unit_id}).then(function (data) {
            if (data.length === 0) {
                return false
            } else {
                return data[0]
            }
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    },
    selectAll: function () {
        return db.any('SELECT * FROM public.sop').then(function (data) {
            return data
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
        })
    },

    selectById (sop_id) {
        return db.any('SELECT * FROM public.sop where sop_id = $1', sop_id)
            .then(function (data) {
                if (data.length === 0) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    return data[0]
                }
            }).catch(function (err) {
                if (err.type) { // means that it comes from a then
                    throw err
                } else {
                    throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());
                }
            })
    },

    /**
     * Require an object that contains all champ even those who doesn't change
     * @param sop
     */
    update (sop) {
        return db.any('UPDATE public.sop SET sop_title = ${sop_title}, sop_approvment = ${sop_approvment},\n' +
            'sop_rules = ${sop_rules}, sop_warning = ${sop_warning}, sop_staff_qualification = ${sop_staff_qualification},\n' +
            'sop_tools = ${sop_tools}, sop_type_reports = ${sop_type_reports}, sop_objectives = ${sop_objectives},\n' +
            'sop_revision = DATE (NOW ())\n' +
            'WHERE sop_id = ${sop_id} returning sop_id', sop).then(function (data) {
            if (data.length === 0) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                return data[0]
            }
        }).catch(function (err) {
            if (err.type) { // means that it comes from a then
                throw err
            } else {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString());
            }
        });
    },

    delete (sop_id) {
        return db.any('DELETE from public.sop CASCADE WHERE sop_id = $1 returning sop_id', sop_id)
            .then(function (data) {
                return data.length !== 0
            }).catch(function (err) {
                throw ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString())
            })
    }
};
module.exports = sop;
