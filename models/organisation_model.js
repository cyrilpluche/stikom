const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let organisation = {
    selectAll: function () {
        return db.any('SELECT * FROM public.organisation').then(function (data) {
            return data
        }).catch(function (err) {
            throw (ERRORTYPE.customError('The server has encountred an internal error\n ' + err.toString()))
        })
    }
}
module.exports = organisation