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

module.exports = router;
