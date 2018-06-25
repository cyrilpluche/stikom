const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const ERRORTYPE = require('../policy/errorType');
const modelSoap = require('../models/sop_model');
const ROLE = require('../policy/roles');

// TODO see for right
router.post('/create',
    policy.requireSpecificRight(ROLE.Planner),
    policy.checkParameters(['sop_title', 'sop_creation', 'sop_revision', 'sop_published', 'sop_approvment',
        'sop_rules', 'sop_warning', 'sop_staff_qualification', 'sop_tools', 'sop_type_reports', 'sop_objectives']),
    function (req, res, next) {
        let sop = {
            sop_title: req.body.sop_title,
            sop_creation: req.body.sop_creation,
            sop_revision: req.body.sop_revision,
            sop_published: req.body.sop_published,
            sop_approvment: req.body.sop_approvment,
            sop_rules: req.body.sop_rules,
            sop_warning: req.body.sop_warning,
            sop_staff_qualification: req.body.sop_staff_qualification,
            sop_tools: req.body.sop_tools,
            sop_type_reports: req.body.sop_type_reports,
            sop_objectives: req.body.sop_objectives
        }
        modelSoap.insert(sop).then(function (data) {
            res.json(data)
        }).catch(function (e) {
            next(e)
        })
    });

router.get('/all',
    policy.requireSpecificRight([ROLE.Planner]),
    function (req, res, next) {
        modelSoap.selectAll().then(function (data) {
            res.json({data: data})
        }).catch(next)
    });

router.get('/findOne/:sopId',
    function (req, res, next) {
        modelSoap.selectById(req.params.sopId).then(function (data) {
            res.json({data: data})
        }).catch(next)
    });

module.exports = router;
