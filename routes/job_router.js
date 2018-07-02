const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelJob = require('../models/job_model');

router.get('/:job', function (req, res, next) {
    modelJob.selectById(req.params.job).then(function (data) {
        res.json({data})
    }).catch(next)
});

module.exports = router;
