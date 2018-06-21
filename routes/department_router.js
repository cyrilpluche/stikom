const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelDepartment = require('../models/department_model');

// TODO everybody can access this route
router.get('/all', policy.checkParameters(['branch']), function (req, res, next) {
    let department_id = req.query.branch
    modelDepartment.selectAllByBranchId(department_id).then(function (data) {
        res.send({data: data});
    }).catch(function (er) {
        next(er);
    })
});

module.exports = router;
