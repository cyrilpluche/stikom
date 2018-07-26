const express = require('express');
const router = express.Router();
const path = require('path');
const ERRORTYPE = require('../policy/errorType');
// const fs = require('fs');
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

router.post('/create', function (req, res, next) {
    let assetPath = path.join(__dirname+ '/../public/').replace(new RegExp(/\\/g), '/');
    console.log(req.body);
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
            stream.pipe(res)
            /*stream.once('close', function () {
                stream.destroy(); // makesure stream closed, not close if download aborted.
                deleteFile(pdfName);
            }) */
        } else {
            next(ERRORTYPE.customError(err.toString(), 'Error', 400));
            // res.status(400).send({error: err.toString()});
        }
    })
    /*pdf.create(req.body.html).toFile(pdfName, function (err, r) {
        console.log(r)
        res.sendFile(r.filename)
    }) */
});
module.exports = router;