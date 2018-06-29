const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let m_level = {
    selectAll () {
        return db.any('SELECT * FROM public.managment_level').then(function (data) {
            return data
        }).catch(function (err) {
            throw ERRORTYPE.customError('The server has encountred an internal error: ' + err.toString())
        })
    }
};

module.exports = m_level;