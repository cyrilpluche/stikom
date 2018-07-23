const express = require('express');
const router = express.Router();
const modelRole = require('../models/role_model');
const policy = require('../policy/policy_middleware');

// TODO precise rights
router.get('/all', function (req, res, next) {
    modelRole.selectAll().then(function (data) {
        res.json({data: data})
    }).catch(next)
});

router.get('/member_role/:member', function (req, res, next) {
    modelRole.selectRoleFromMember(req.params.member).then(function (data) {
        res.json({data: data})
    }).catch(next);
});

router.post('/grant_member', policy.checkParameters(['member', 'role']),
    function (req, res, next) {
        modelRole.insertHasRole(req.body.member, req.body.role).then(function (data) {
            res.json({data: data})
        }).catch(next);
    });

module.exports = router;