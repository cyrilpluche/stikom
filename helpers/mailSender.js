const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
    service: process.env.USER_MAIL_SERVICE,//process.env.SERVICE_MAIL,
    auth: {
        user: process.env.USER_MAIL_ADDRESS, // process.env.USER_MAIL,
        pass: process.env.USER_MAIL_PWD
    }
});
// St1K0mB4l1

/**
 * create the html structure and inject the html we want to send in it
 * @param html
 * @returns {string}
 */
function encapsulateHTML (html) {
    return `<!DOCTYPE html>
        <html>
<head>
<title>Master of Work</title>
</head>
<body>
${html}
</body>
</html>`
}

let mailSender = {
    /**
     *
     * @param recipient: to whom the mail is intended to
     * @param subject: the subect the mail deals with
     * @param body: message
     * @param files: files
     * @param callback
     */
    send (recipient, subject, body, files, callback) {
        //TODO manage files
        let mail = {
            from: `Master Of Work<from@${process.env.USER_MAIL_SERVICE}.com>`,
            to: recipient,
            subject: subject,
            text: '',
            html: encapsulateHTML(`<div style="margin: auto; text-align: center;"><img src="cid:unique@kreata.ee" width="10%"/><p>${body}</p></div>`),
            attachments: [{
                filename: 'logo.png',
                path: 'public/images/logo-stikom.png',
                cid: 'unique@kreata.ee' //same cid value as in the html img src
            }]
        }
        smtpTransport.sendMail(mail, function(error, response){
            callback(error, response);
            smtpTransport.close();
        });
    }
}

module.exports = mailSender;