const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelSubDepartment = require('../models/sub_department_model');

router.get('/all', policy.checkParameters(['department']), function (req, res, next) {
    let department_id = req.query.department;
    modelSubDepartment.selectAllByDepartmentId(department_id).then(function (data) {
        res.json({data: data})
    }).catch(function (e) {
        next(e);
    })
});
module.exports = router;
