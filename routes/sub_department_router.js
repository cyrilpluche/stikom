const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelSubDepartment = require('../models/sub_department_model');
const ERRORTYPE = require('../policy/errorType');


router.get('/all', policy.checkParameters(['department']), function (req, res, next) {
    let department_id = req.query.department;
    modelSubDepartment.selectAllByDepartmentId(department_id).then(function (data) {
        res.json({data: data})
    }).catch(function (e) {
        next(e);
    })
});

router.post('/create',
    policy.requireAdmin,
    policy.checkParameters(['sub_department_name', 'department_id']),
    function (req, res, next) {
        let sub_department = {
            sub_department_name: req.body.sub_department_name,
            department_id: req.body.department_id
        }
        modelSubDepartment.insert(sub_department).then(function (data) {
            if (!data) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                res.json ({data: data})
            }
        }).catch(next)
    });

router.delete('/delete/:sub_department',
    policy.requireAdmin,
    function (req, res, next) {
    modelSubDepartment.delete(req.params.sub_department)
        .then(function (data) {
            if (!data) throw ERRORTYPE.NOT_FOUND;
            else res.json({data: data})
        }).catch(next)
});

module.exports = router;
