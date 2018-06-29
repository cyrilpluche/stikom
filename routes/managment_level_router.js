const express = require('express');
const router = express.Router();
const modelMLevel = require('../models/management_level_model');

router.get('/all', function (req, res, next) {
    modelMLevel.selectAll().then(function (data) {
        res.json({data: data});
    }).catch(next);
});

module.exports = router;