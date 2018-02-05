const nodemailer = require('nodemailer')
module.exports = {
	mail: (body)=>{
		nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
       /* host: 'imap.yandex.ru',
        port: 465,
        secure: true, // true for 465, false for other ports*/
		service: 'Yandex',
        auth: {
            user: 'videockarty', // generated ethereal user sozdatel.botov@yandex.ru
            pass: 'vcardsorder'  // generated ethereal password 1kel991
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Телеграм бот" <videockarty@yandex.ru>', // sender address
        to: 'valefuwon@kumail8.info', // list of receivers
        subject: 'Заявка на видеокарту', // Subject line
        html: body // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        //console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

	}
}
