const express = require('express');
const router = express.Router();
const modelOrganisation = require('../models/organisation_model');

// TODO everybody can access to this route
router.get('/all', function (req, res, next) {
    modelOrganisation.selectAll().then(function (data) {
        res.json({data: data});
    }).catch(function (er) {
        next(er)
    })
});
module.exports = router;
