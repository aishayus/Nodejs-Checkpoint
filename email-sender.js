var nodemailer = require("nodemailer");

async function Email() {
    let transporter = emailSender.createTransport({
        service: 'gmail',
        auth: {
            user: "your-email@getMaxListeners.com", 
            pass: "your-password" 
        }
    })

    let mailOptions = {
        from: 'sender-email@gmail.com',
        to: 'your-email@gmail.com', 
        subject: 'Test Email', 
        text: 'HIIIIIIIIIIIIII' 
    };
    transporter.sendMail(mailOptions, (error, info) => {
        error? console.log(error):console.log('Message sent: %s', info.messageId);
    });
}

