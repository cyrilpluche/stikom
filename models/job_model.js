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
    }
};

module.exports = job;