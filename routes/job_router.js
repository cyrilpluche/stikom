const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelJob = require('../models/job_model');
const ERRORTYPE = require('../policy/errorType');


/*
===========================================  ROUTER GET ============================================
 */

router.get('/all_from_sop/:sop', function (req, res, next) {
    modelJob.selectAllBySopId(req.params.sop)
        .then(function (data) {
            res.json({data: data})
        }).catch(next)
});

router.get('/find_one/:job', function (req, res, next) {
    modelJob.selectById(req.params.job).then(function (data) {
        res.json({data})
    }).catch(next)
});

router.get('/all_from_project/:project', function (req, res, next) {
    modelJob.selectAllByProjectId(req.params.project).then(function (data) {
        if (!data) {
            throw ERRORTYPE.NOT_FOUND
        } else {
            res.json({data})
        }
    }).catch(next)
});

router.get('/all_from_activity/:activity',
    function (req, res, next) {
        modelJob.selectAllByActivityId(req.params.activity)
            .then(function (jobs) {
                const modelActivity = require('../models/activity_model');
                let promises = []
                for (let i = 0; i < jobs.length; i++) {
                    promises.push(
                        modelActivity.selectAllByJobId(jobs[i].job_id).then(function (data) {
                            return {
                                job_is_sop: containsActivitySop (data),
                                associated_job: jobs[i] // to have a track of the job we are working on
                            }
                        })
                    )
                }

                Promise.all(promises).then(function (r) {
                    let data = {
                        sop_job: null, // there can only be one sop_job in the list
                        simple_jobs: []
                    };
                    for (let i = 0; i < r.length; i++) {
                        if (r[i].job_is_sop) {
                            data.sop_job = r[i].associated_job
                        } else {
                            data.simple_jobs.push(r[i].associated_job)
                        }
                    }
                    res.json({data: data})
                })
            }).catch(next)
    }
);

/*
=========================================== ROUTER POST =============================================
 */

router.post('/create',
    policy.checkParameters(['job_name', 'job_code', 'sop_id']),
    function (req, res, next) {
        let job = {
            job_name: req.body.job_name,
            job_code: req.body.job_code,
            sop_id: req.body.sop_id
        };
        modelJob.insert(job)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    res.json ({data: data})
                }
            }).catch(next)
    });

router.post('/bind_job_activity',
    policy.checkParameters(['activity_id', 'job_id']),
    function (req, res, next) {
        modelJob.insertActivityIsJob(req.body.activity_id, req.body.job_id)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    res.json ({data: data})
                }
            }).catch(next)
});

router.post('/compute_end_date',
    policy.checkParameters(['jobs', 'date_begin']),
    function (req, res, next) {
        let promises = []; // will contains an array of promises
        let end_date = new Date(req.body.date_begin);
        let jobs = req.body.jobs;
        const modelActivity = require('../models/activity_model');
        for(let i = 0; i < jobs.length; i++) {
            promises.push( // get all activity with the job_id 
                modelActivity.selectAllByJobId(jobs[i].job_id).then(function (data) {
                    return data
                })
            )
        }

        Promise.all(promises).then(
            function (activites) {
                let activity_duration = 0;
                let activity_duration_MAX = 0;
                for (let i = 0; i < activites.length; i++) {
                    if (activites[i] !== false) {
                        for (let j = 0; j < activites[i].length; j++) {
                            // convert every times in minutes
                            switch (activites[i][j].activity_type_duration.toLowerCase())  {
                                case 'minutes':
                                    activity_duration = activites[i][j].activity_duration;
                                    break;
                                case 'hours':
                                    activity_duration = activites[i][j].activity_duration * 60; // 60 minutes
                                    break;
                                case 'days':
                                    activity_duration = activites[i][j].activity_duration * 60 * 24; // 24 hours
                                    break;
                                case 'months':
                                    activity_duration = activites[i][j].activity_duration * 60 * 24 * 30; // 30 days
                                    break;
                            }

                            if (activity_duration > activity_duration_MAX) {
                                // if the computed duration is greater than the previous greater one
                                activity_duration_MAX = activity_duration
                            }
                        }
                    }
                }
                end_date.setMinutes(end_date.getMinutes() +  activity_duration_MAX); // add on the max duration
                res.json({data: {end_date: end_date}});
            }
        ).catch(next)
    }
);

/*
=========================================== ROUTER PUT ==============================================
 */

router.put('/update',
    policy.checkParameters(['job_id', 'job_name', 'job_code', 'sop_id']),
    function (req, res, next) {
        let job = {
            job_id: req.body.job_id,
            job_name: req.body.job_name,
            job_code: req.body.job_code,
            sop_id: req.body.sop_id
        };
        modelJob.update(job).then(function (data) {
            if (!data) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                res.json ({data: data})
            }
        }).catch(next)
    }
);

/*
=========================================== FUNCTION ==============================================
 */

/**
 * checks if the array contains A activity which has 'sop_type'
 * @param activities
 * @returns {boolean}
 */
function containsActivitySop (activities) {
    let resultat = false;
    if (activities === false) {
        return false
    } else {
        let i = 0;
        while (!resultat && i < activities.length) {
            if (activities[i].activity_type.toUpperCase() === 'SOP') {
                resultat = true
            }
            i++
        }
        return resultat
    }
}


function numberOfSunder (dateBegin, dateEnd) {
    let totalSundays = 0;
    let date = dateBegin;
    while (date <= dateEnd){
        if (date.getDay() === 0){
            totalSundays++;
        }
        date.setDate(date.getDate() + 1); // add A day
    }

    return totalSundays
}
module.exports = router;
