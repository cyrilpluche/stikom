const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelDepartment = require('../models/department_model');

// TODO everybody can access this route
router.get('/all', policy.checkParameters(['branch']), function (req, res, next) {
    let branch_id = req.query.branch
    modelDepartment.selectAllByBranchId(branch_id).then(function (data) {
        res.json({data: data});
    }).catch(function (er) {
        next(er);
    })
});

module.exports = router;
