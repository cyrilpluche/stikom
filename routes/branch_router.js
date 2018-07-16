const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelBranch = require('../models/branch_model');
const ERRORTYPE = require('../policy/errorType');

router.get('/all', policy.checkParameters(['organisation']) ,function (req, res, next) {
    let organisation_id = req.query.organisation
    modelBranch.selectAllByOrganisationId(organisation_id).then(function (data) {
        res.json({data: data})
    }).catch(function (er) {
        next(er)
    });
});

router.post('/create',
    policy.requireAdmin,
    policy.checkParameters(['branch_name', 'organisation_id']),
    function (req, res, next) {
        let branch = {
            branch_name: req.body.branch_name,
            organisation_id: req.body.organisation_id
        }
        modelBranch.insert(branch).then(function (data) {
            if (!data) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                res.json ({data: data})
            }
        }).catch(next)
    });

router.delete('/delete/:branch',
    policy.requireAdmin,
    function (req, res, next) {
    modelBranch.delete(req.params.branch)
        .then(function (data) {
            if (!data) throw ERRORTYPE.NOT_FOUND;
            else res.json({data: data})
        }).catch(next)
});

module.exports = router;
