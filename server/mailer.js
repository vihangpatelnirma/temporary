const formObject = require('./formHtml');
const nodeMailer = require('nodemailer');

const destination = "jalpa.dance.academy@gmail.com"

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});


function getMailOptions(params) {
    // setup email data with unicode symbols
    const mailOptions = {
        from: "nodevihang@gmail.com", // sender address
        to: destination, // list of receivers
        subject: 'Query From ' + params.Name, // Subject line
        text: "Following details are queried:", // plain text body
        html: formObject.adminTemplate(params)
    };

    return mailOptions;
}



function sendEmail(req, res) {

    const data = req.body;
    sendMailToAdmin(data);
    sendAcknowledgement(data);
}

function sendMailToAdmin(data) {
    
    const mailOptions = getMailOptions(data);
    transporter.sendMail(mailOptions, handler);

}

function getMailOptions2(params) {
    // setup email data with unicode symbols
    const mailOptions = {
        from: "nodevihang@gmail.com", // sender address
        to: params.Email, // list of receivers
        subject: 'Welcome to Natural Clinic MD !', // Subject line
        html: formObject.userAcknowledge(params)
    };

    return mailOptions;
}

function sendAcknowledgement(data) {

    const mailOptions2 = getMailOptions2(data);
    
    transporter.sendMail(mailOptions2, handler);
}

function handler(error, info) {
    
    if(error) {
        return console.log(error);
    }

    console.log('Message %s send : %s', info.messageId, info.respones);
    return true
}

module.exports = sendEmail