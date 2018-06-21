const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelBranch = require('../models/branch_model');

// TODO everybody can acces this route
router.get('/all', policy.checkParameters(['organisation']) ,function (req, res, next) {
    let organisation_id = req.query.organisation
    modelBranch.selectAllByOrganisationId(organisation_id).then(function (data) {
        res.send({data: data})
    }).catch(function (er) {
        next(er)
    });
});

module.exports = router;
