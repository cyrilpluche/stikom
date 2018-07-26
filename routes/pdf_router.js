const express = require('express');
const router = express.Router();
const path = require('path');
const ERRORTYPE = require('../policy/errorType');
const policy = require('../policy/policy_middleware');
const pdf = require('html-pdf');

function deleteFile (file) {
    fs.unlink(file, function (err) {
        if (err) {
            console.error(err.toString());
        } else {
            console.warn(file + ' deleted');
        }
    });
}

router.post('/create',
    policy.checkParameters(['html']),
    function (req, res, next) {
        let assetPath = path.join(__dirname+ '/../public/').replace(new RegExp(/\\/g), '/');
        pdf.create(req.body.html,
            {
                directory: 'public/pdf/',
                format: 'Letter',
                base: 'file:///' + assetPath, //path.join(__dirname+ '/../public/images')
                orientation: 'landscape'

            }
        ).toStream(function (err, stream) {
            if (!err) {
                res.setHeader('Content-type', 'application/pdf');
                res.header('Content-Disposition', 'attachment; filename="new file name.pdf"');
                stream.pipe(res) // pipe the file to the res stream means that the file is automatically sent
            } else {
                next(ERRORTYPE.customError(err.toString(), 'Error', 400));
                // res.status(400).send({error: err.toString()});
            }
        })
    }
);
module.exports = router;