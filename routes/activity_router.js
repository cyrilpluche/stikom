const express = require('express');
const router = express.Router();
const modelActivity = require('../models/activity_model');
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');


router.get('/all_from_sop/:sop');

router.post('/create',
    policy.checkParameters(['activity_type_duration', 'activity_duration', 'activity_type', 'activity_type_output',
    'activity_description', 'activity_shape', 'activity_id_is_next', 'sop_id']),
    function (req, res, next) {
    let activity = {
        activity_type_duration : req.body.activity_type_duration,
        activity_duration: req.body.activity_duration,
        activity_type: req.body.activity_type,
        activity_type_output: req.body.activity_type_output,
        activity_description: req.body.activity_description,
        activity_shape: req.body.activity_shape,
        activity_id_is_next: req.body.activity_id_is_next,
        sop_id: req.body.sop_id
    }
    modelActivity.insert(activity).then(function (data) {
        if (!data) {
            throw ERRORTYPE.INTERNAL_ERROR
        } else {
            res.json({data: data});
        }
    }).catch(next)
});

module.exports = router;

