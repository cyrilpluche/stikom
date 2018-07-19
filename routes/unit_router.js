const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelUnit = require('../models/unit_model');

router.post('/create', policy.checkParameters(['unit_name']),
    function (req, res, next) {
        let unit = {unit_name: req.body.unit_name};
        modelUnit.insert(unit).then(function (data) {
            if (!data) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                res.json({data: data});
            }
        }).catch(next)
    }
);

router.post('/execute_activity',
    policy.checkParameters(['unit_id', 'activity_id']),
    function (req, res, next) {
        modelUnit.insertExecute(req.body.unit_id, req.body.activity_id)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    res.json({data: data});
                }
            }).catch(next)
    }
);

router.get('/all_from_sop/:sop', function (req, res, next) {
    modelUnit.selectAllBySopId(req.params.sop).then(function (data) {
        res.json({data: data})
    }).catch(next)
});

router.get('/all_from_job/:job', function (req, res, next) {
    modelUnit.selectAllByJobId(req.params.job).then(function (data) {
        if (!data) {
            res.json({data: []})
        } else {
            res.json({data: data})
        }
    }).catch(next)
});

router.get('/all_from_activity/:activity', function (req, res, next) {
    modelUnit.selectAllByJActivityId(req.params.activity).then(function (data) {
        if (!data) {
            res.json({data: []})
        } else {
            res.json({data: data})
        }
    }).catch(next)
});

module.exports = router;