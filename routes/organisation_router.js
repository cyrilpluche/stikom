const express = require('express');
const router = express.Router();
const modelOrganisation = require('../models/organisation_model');
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');


router.get('/all',
    function (req, res, next) {
        modelOrganisation.selectAll().then(function (data) {
            res.json({data: data});
        }).catch(function (er) {
            next(er)
        })
    }
);

router.post('/create', policy.requireAdmin,
    policy.checkParameters(['organisation_name']),
    function (req, res, next) {
        let organisation = {
            organisation_name: req.body.organisation_name
        };
        modelOrganisation.insert(organisation).then(function (data) {
            if (!data) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                res.json ({data: data})
            }
        }).catch(next)
    }
);

router.delete('/delete/:organisation',
    policy.requireAdmin,
    function (req, res, next) {
        modelOrganisation.delete(req.params.organisation)
            .then(function (data) {
                if (!data) throw ERRORTYPE.NOT_FOUND;
                else res.json({data: data})
            }).catch(next)
    }
);
module.exports = router;
