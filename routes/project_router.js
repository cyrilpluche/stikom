const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelProject = require('../models/project_model');
const ERRORTYPE = require('../policy/errorType');


/*
===========================================  ROUTER GET ============================================
 */

router.get('/all',
    function (req, res, next) {
        modelProject.selectAll().then(function (data) {
            res.json({data: data})
        }).catch(next)
    }
);

router.get('/all_from_sop/:sop',
    function (req, res, next) {
        modelProject.selectAllBySopId(req.params.sop)
            .then(function (data) {
                res.json({data: data})
            }).catch(next)
    }
);

router.get('/all_member_activity_project/:project',
    function (req, res, next) {
        modelProject.selectAllMemberActivityProjectByProject_id(req.params.project)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    res.json({data: data})
                }
            }).catch(next)
    }
);

router.get('/find_one/:project',
    function (req, res, next) {
        modelProject.selectById(req.params.project)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    res.json({data: data})
                }
            }).catch(next)
    }
);

router.get('/all_member_activity_project_distinct/:project',
    function (req, res, next) {
        modelProject.selectAllIdMemberActivityProjectByProject_id(req.params.project)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    res.json({data: data})
                }
            }).catch(next)
    }
);

/*
=========================================== ROUTER POST =============================================
 */

router.post('/create',
    policy.checkParameters(['project_title', 'project_code', 'project_work_code','project_start', 'project_end',
        'sub_department_id']),
    function (req, res, next) {
        let project = {
            project_title: req.body.project_title,
            project_code: req.body.project_code,
            project_work_code: req.body.project_work_code,
            sub_department_id: req.body.sub_department_id,
            project_start: new Date(req.body.project_start),
            project_end: new Date(req.body.project_end)
        };
        modelProject.insert(project)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    res.json ({data: data})
                }
            }).catch(next)
    }
);

router.post('/bind_member_unit_project',
    policy.checkParameters(['unit_id', 'project_id', 'member_id', 'job_id']),
    function (req, res, next) {
        let unit_id = req.body.unit_id
        let project_id = req.body.project_id
        let member_id = req.body.member_id
        let job_id = req.body.job_id
        modelProject.insertMemberUnitProject(unit_id, project_id, member_id, job_id)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    res.json ({data: data})
                }
            }).catch(next)
    }
);

router.post('/bind_project_job',
    policy.checkParameters(['job_id', 'project_id']),
    function (req, res, next) {
        modelProject.insertProjectHasJob(req.body.project_id, req.body.job_id)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    res.json ({data: data})
                }
            }).catch(next)
    }
);

router.post('/bind_member_activity_project',
    policy.checkParameters(['project_id', 'member_id', 'activity_id', 'target_date', 'date_begin', 'evaluation',
        'finished_date', 'sign', 'note', 'target_quantity', 'finished_quantity', 'finished_duration', 'job_id']),
    function (req, res, next) {
        let d = {
            project_id: req.body.project_id,
            member_id: req.body.member_id,
            activity_id: req.body.activity_id,
            target_date: new Date(req.body.target_date),
            date_begin: new Date(req.body.date_begin),
            evaluation: req.body.evaluation,
            finished_date: new Date(req.body.finished_date),
            sign: req.body.sign,
            note: req.body.note,
            target_quantity: req.body.target_quantity,
            finished_quantity: req.body.finished_quantity,
            finished_duration: req.body.finished_duration,
            job_id: req.body.job_id
        };
        modelProject.insertMemberActivityProject(d)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.INTERNAL_ERROR
                } else {
                    res.json ({data: data})
                }
            }).catch(next)
    }
);

// TODO a finir
router.post('/create_activity_member',
    policy.checkParameters(['member_id', 'activity_id', 'target_date', 'date_begin', 'evaluation', 'finished_date',
        'sign', 'note', 'target_quantity', 'finished_quantity', 'finished_duration']),
    function (req, res, next) {
        let project = {
            member_id: req.body.member_id,
            activity_id: req.body.activity_id,
            target_date: req.body.target_date,
            date_begin: req.body.date_begin,
            evaluation: req.body.evaluation ,
            finished_date: req.body.finished_date,
            sign: req.body.sign,
            note: req.body.note,
            target_quantity: req.body.target_quantity,
            finished_quantity: req.body.finished_date,
            finished_duration: req.body.finished_duration
        };

    }
);


/*
========================================== ROUTER PUT ============================================
 */

router.put('/update_member_activity_project',
    policy.checkParameters(['member_id', 'activity_id', 'target_date', 'date_begin', 'evaluation', 'finished_date',
        'sign', 'note', 'target_quantity', 'finished_quantity', 'finished_duration', 'job_id']),
    function (req, res, next) {
        let map = {
            project_id: req.body.project_id,
            member_id: req.body.member_id,
            activity_id: req.body.activity_id,
            target_date: req.body.target_date,
            date_begin: new Date(req.body.date_begin),
            evaluation: req.body.evaluation,
            finished_date: new Date(req.body.finished_date),
            sign: req.body.sign,
            note: req.body.note,
            target_quantity: req.body.target_quantity,
            finished_quantity: req.body.finished_quantity,
            finished_duration: req.body.finished_duration,
            job_id: req.body.job_id
        };
        modelProject.updateMemberActivityProject(map).then(function (data) {
            if (!data) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                res.json({data: data})
            }
        }).catch(next)
    }
);

router.put('/update',
    function (req, res, next) {
        let project = {
            project_id: req.body.project_id,
            project_title: req.body.project_title,
            project_code: req.body.project_code,
            project_work_code: req.body.project_work_code,
            sub_department_id: req.body.sub_department_id,
            project_start: new Date(req.body.project_start),
            project_end: new Date(req.body.project_end)
        }
        modelProject.update(project).then(function (data) {
            if (!data) {
                throw ERRORTYPE.INTERNAL_ERROR
            } else {
                res.json({data: data})
            }
        }).catch(next)
    }
);

/*
========================================== ROUTER DELETE =========================================
 */

router.delete('/delete/:project', function (req, res, next) {
    modelProject.delete(req.params.project)
        .then(function (data) {
            if (!data) throw ERRORTYPE.NOT_FOUND;
            else res.json({data: data})
        }).catch(next)
});
module.exports = router;