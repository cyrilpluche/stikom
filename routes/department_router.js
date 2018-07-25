const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelDepartment = require('../models/department_model');
const ERRORTYPE = require('../policy/errorType');


router.get('/all', policy.checkParameters(['branch']), function (req, res, next) {
        let branch_id = req.query.branch
        modelDepartment.selectAllByBranchId(branch_id).then(function (data) {
            res.json({data: data});
        }).catch(function (er) {
            next(er);
        })
    }
);

router.post('/create', 
    policy.requireAdmin,
    policy.checkParameters(['department_name','branch_id']),
    function (req, res, next) {
        let department = {
            department_name: req.body.department_name,
            branch_id: req.body.branch_id
        };
        modelDepartment.insert(department).then(function (data) {
            if (!data) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                res.json ({data: data})
            }
        }).catch(next)
    }
);

router.delete('/delete/:department',
    policy.requireAdmin,
    function (req, res, next) {
        modelDepartment.delete(req.params.department)
            .then(function (data) {
                if (!data) throw ERRORTYPE.NOT_FOUND;
                else res.json({data: data})
            }).catch(next)
    }
);

module.exports = router;
