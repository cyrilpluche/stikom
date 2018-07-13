import express from 'express'
import modelActivity from '../models/activity_model'
import policy from '../policy/policy_middleware'
import ERRORTYPE from '../policy/errorType'
import {selectAllByProjectId} from '../models/job_model'

const router = express.Router();

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
            if (!data) {
                throw ERRORTYPE.NOT_FOUND
            } else {
                res.json({data: data})
            }
        }).catch(next)
});

router.get('/all_from_job/:job',
    function (req, res, next) {
        modelActivity.selectAllByJobId(req.params.job).then(function (data) {
            if (!data) {
                throw ERRORTYPE.NOT_FOUND
            } else {
                res.json({data: data})
            }
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

// select every activities from every job from a projet (with units)
router.get('/all_from_all_job_from_project/:project',
    function (req, res, next) {
        selectAllByProjectId(req.params.project).then(function (jobs) {
            if (!jobs) {
                throw ERRORTYPE.NOT_FOUND
            } else {
                console.log('Job', jobs)
                let promises = [] // array of promises
                for (let i = 0; i < jobs.length; i++) {
                    promises.push(modelActivity.selectAllByJobId(jobs[i].job_id))
                }

                Promise.all(promises).then(function (activities) {
                    for (let i = 0; i < activities.length; i++) {
                        if (!activities[i]) {
                            jobs[i].activities = ERRORTYPE.NOT_FOUND
                        } else {
                            jobs[i].activities = activities[i]
                        }
                    }
                    res.json({data: jobs});
                }).catch(function (e) {
                    throw e
                })
            }
        }).catch(next)
    }
);


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

