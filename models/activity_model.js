const db = require('../config/db_config');
const ERRORTYPE = require('../policy/errorType');

let activity = {
    insert  (activity) {
        return db.any('',
            activity).then()
    }
};

module.exports = activity;