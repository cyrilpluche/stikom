const express = require('express');
const router = express.Router();
const policy = require('../policy/policy_middleware');
const modelProject = require('../models/project_model');
const ERRORTYPE = require('../policy/errorType');
const basicMethods =  require('../helpers/basicMethodsHelper');


/*
===========================================  ROUTER GET ============================================
 */

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
        modelProject.selectAllMemberActivityProjectByProjectId(req.params.project)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    res.json({data: data})
                }
            }).catch(next)
    }
);

router.get('/all_member_activity_project_full/:project',
    function (req, res, next) {
        modelProject.selectAllMemberActivityProjectByProjectIdFull(req.params.project)
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
        modelProject.selectAllIdMemberActivityProjectByProjectId(req.params.project)
            .then(function (data) {
                if (!data) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    res.json({data: data})
                }
            }).catch(next)
    }
);


router.get('/volume_progress_days/:project',
    function (req, res, next) {
        modelProject.selectById(req.params.project)
            .then(function (project) {
                if (!project) {
                    throw ERRORTYPE.NOT_FOUND
                } else {
                    let date_begin = new Date(project.project_start);
                    let date_end = new Date(project.project_end);

                    // get an array with every single date between both date
                   let dates = basicMethods.datesBetween(date_begin, date_end, 1);
                   return {dates: dates}; // return an object that contains all date to the next promise

                }
            })
            .then(function (object) {
                // object is equal to {dates : Array of Date}
                return modelProject.selectAllMemberActivityProjectByProjectId(req.params.project)
                    .then(function (memberActivityProjects) {
                            let members = [];
                            // foreach member id in memberActivityProjects
                            for (let i = 0; i < memberActivityProjects.length; i++) {
                                if (!basicMethods.arrayObjectContains(members, 'member_id',
                                    memberActivityProjects[i].member_id)) {
                                    // in order not to have twice the same member_id
                                    members.push({
                                        member_id: memberActivityProjects[i].member_id,
                                        activities: []});
                                }
                            }

                            /* each element of the array member has an activities array
                                means all the activities the member will do
                             */
                            for(let i = 0; i < memberActivityProjects.length; i++) {
                                for (let j = 0; j < members.length; j++) {
                                    if (memberActivityProjects[i].member_id === members[j].member_id) {
                                        members[j].activities.push({
                                            date_begin: new Date(memberActivityProjects[i].date_begin),
                                            target_date: new Date(memberActivityProjects[i].target_date),
                                            target_quantity: memberActivityProjects[i].target_quantity,
                                            finished_quantity: memberActivityProjects[i].finished_quantity,
                                            finished_quantity_tmp: memberActivityProjects[i].finished_quantity
                                                // going update finish_quantity_tmp
                                        })
                                    }
                                }
                            }
                            object.members = members;
                            return object;
                        }
                    ).catch(function (e) {
                        throw e
                    })
            })
            .then(function (object) {
                let promises = [];
                for (let i = 0; i < object.members.length; i++) {
                    promises.push( // get data for members
                        require('../models/member_model').selectById(object.members[i].member_id)
                            .then(function (member) {
                                if (member) {
                                    member.member_password = undefined;
                                    member.seed = undefined;
                                }
                                return member
                            })
                    )
                }

                return Promise.all(promises).then(function (members) {
                    for (let i = 0; i < members.length; i++) {
                        for (let j = 0; j < object.members.length; j++) {
                            if (object.members[j].member_id === members[i].member_id) {
                                object.members[j].member_id = undefined;
                                object.members[j].member = members[i];
                                // replace the propreties member_id by an object member that contains all the data
                                // related to the member
                            }
                        }
                    }
                    return object
                });
            })
            .then(function (object) {
                /* split the data to have an object like
                 [ {
                 date: a Date,
                 elements: {
                    target_quantity: the member objective for the date,
                    finished_quantity: what he has done,
                    finished_rate: percentage of what he has done compare to what he should have done,
                    member: {
                        information on the member
                    }
                  }
                ]
                 */

                let numberOfDay = 1; // number of day between a date_begin and a target_date
                let workMax = 0; // the work max that a member can do for one day
                let workDone = 0;

                let element = {target_quantity: 0, finished_quantity: 0, finished_rate: 0};
                let data = {
                    date: null,
                    elements: [] // array of element
                };
                let resultat = []; // array of data

                for (let i = 0; i < object.dates.length; i++) {
                    data = {
                        date: object.dates[i],
                        elements: []
                    };

                    for (let j = 0; j < object.members.length; j++) {
                        element = {target_quantity: 0, finished_quantity: 0, finished_rate: 0};

                        for (let k = 0; k < object.members[j].activities.length; k++) {

                            if (object.dates[i] >= object.members[j].activities[k].date_begin &&
                                object.dates[i] <= object.members[j].activities[k].target_date) {
                                // if the date is between the targe Date and the begin Date
                                numberOfDay = basicMethods.daysBetween(
                                    object.members[j].activities[k].date_begin,
                                    object.members[j].activities[k].target_date);
                                if (numberOfDay <= 0) {
                                    numberOfDay = 1 // because we can't divide by 0
                                }
                                workMax =  basicMethods.round(
                                    object.members[j].activities[k].target_quantity / numberOfDay, 1);
                                element.target_quantity += workMax; // add quantity to what should be done by the member on the date
                                element.target_quantity = basicMethods.round(element.target_quantity, 1);

                                if (workMax <= object.members[j].activities[k].finished_quantity_tmp) {
                                    object.members[j].activities[k].finished_quantity_tmp -= workMax;
                                    element.finished_quantity += workMax
                                } else {
                                    workDone = object.members[j].activities[k].finished_quantity_tmp;
                                    object.members[j].activities[k].finished_quantity_tmp = 0;
                                    element.finished_quantity += workDone
                                } // increment what he has done
                            }
                        }

                        if (element.target_quantity !== 0) {
                            element.finished_rate = basicMethods.round(
                                element.finished_quantity * 100 / element.target_quantity, 2) // 2 numbers after coma
                        }
                        element.member = object.members[j].member;
                        data.elements.push(element);
                    }
                    resultat.push(data)
                }
                res.json({data: resultat})
            })
            .catch(next)
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