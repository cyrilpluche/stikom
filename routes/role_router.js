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

router.post('/grant_member',
    policy.requireAdmin,
    policy.checkParameters(['member', 'role']),
    function (req, res, next) {
        modelRole.insertHasRole(req.body.member, req.body.role_id).then(function (data) {
            res.json({data: data})
        }).catch(next);
    }
);

// ungrant_member?member=member_id&role=role_id
router.delete('/ungrant_member',
    policy.requireAdmin,
    function (req, res, next) {
    console.log(req.query.member);
    console.log(req.query.role);
        modelRole.deleteMemberRoleByRoleTitle(req.query.member, req.query.role)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    res.json ({data: data})
                }
            }).catch(next)
    }
);

module.exports = router;