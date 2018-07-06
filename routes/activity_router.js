const express = require('express');
const router = express.Router();
const modelActivity = require('../models/activity_model');
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');


router.get('/find_one/:activity',
    function (req, res, next) {
        modelActivity.selectById(req.params.activity).then(function (data) {
            if (!data) {
                throw ERRORTYPE.NOT_FOUND
            } else {
                res.json({data: data})
            }
        }).catch(next)
    }
);

router.get('/all_from_sop/:sop',
    function (req, res, next) {
        modelActivity.selectAllBySopId(req.params.sop).then(function (data) {
            res.json({data: data});
        }).catch(next)
});

router.get('/all_from_job/:job',
    function (req, res, next) {
        modelActivity.selectAllByJobId(req.params.job).then(function (data) {
            res.json({data: data});
        }).catch(next)
});

router.get('/all_from_unit/:unit',
    function (req, res, next) {
        modelActivity.selectAllByUnitId(req.params.unit)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    res.json({data: data})
                }
            }).catch(next)
    }
);

router.get('/all_from_project/:project', function (req, res, next) {
    modelActivity.selectAllByProjectId(req.params.project)
        .then(function (data) {
            if (!data) {
                throw ERRORTYPE.NOT_FOUND
            } else {
                res.json({data: data})
            }
        }).catch(next)
});

router.post('/create',
    policy.checkParameters(['activity_title', 'activity_type_duration', 'activity_duration', 'activity_type',
        'activity_type_output', 'activity_description', 'activity_shape', 'activity_id_is_father', 'sop_id',
        'managment_level_id']),
    function (req, res, next) {
    let isFather = req.body.activity_id_is_father;
    if (req.body.activity_id_is_father === 'NULL') {
        isFather = null
    }
    let activity = {
        activity_title: req.body.activity_title,
        activity_type_duration : req.body.activity_type_duration,
        activity_duration: req.body.activity_duration,
        activity_type: req.body.activity_type,
        activity_type_output: req.body.activity_type_output,
        activity_description: req.body.activity_description,
        activity_shape: req.body.activity_shape,
        activity_id_is_father: isFather,
        sop_id: req.body.sop_id,
        managment_level_id: req.body.managment_level_id
    };
    modelActivity.insert(activity).then(function (data) {
        if (!data) {
            throw ERRORTYPE.INTERNAL_ERROR
        } else {
            res.json({data: data});
        }
    }).catch(next)
});

router.put('/update',
    policy.checkParameters(['activity_title', 'activity_type_duration', 'activity_duration', 'activity_type',
        'activity_type_output', 'activity_description', 'activity_shape', 'activity_id_is_father', 'sop_id',
        'activity_id']),
    function (req, res, next) {
        let activity = {
            activity_id: req.body.activity_id,
            activity_title: req.body.activity_title,
            activity_type_duration : req.body.activity_type_duration,
            activity_duration: req.body.activity_duration,
            activity_type: req.body.activity_type,
            activity_type_output: req.body.activity_type_output,
            activity_description: req.body.activity_description,
            activity_shape: req.body.activity_shape,
            activity_id_is_father: req.body.activity_id_is_father,
            sop_id: req.body.sop_id
        };
        modelActivity.update(activity).then(function (data) {
            if (!data) {
                throw ERRORTYPE.NOT_FOUND
            } else {
                res.json({data: data});
            }
        }).catch(next)
    });

router.delete('/delete/:activity', function (req, res, next) {
    modelActivity.delete(req.params.activity)
        .then(function (data) {
        if (!data) throw ERRORTYPE.NOT_FOUND;
        else res.json({data: data})
    }).catch(next)
});

module.exports = router;

