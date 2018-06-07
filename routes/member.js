const express = require('express');
const router = express.Router();
const modelMember = require('../models/member_model')

/* GET home page. */
router.get('/register', function(req, res, next) {
   modelMember.insert()
});

module.exports = router;
