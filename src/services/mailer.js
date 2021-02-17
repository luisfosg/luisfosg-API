import Mailer from 'nodemailer';

const conexionEmail = Mailer.createTransport({
    service: "gmail",
    auth:{
        user: "luisfosg@gmail.com",
        pass: ""
    }
});

export const sendEmail = async (from, msg, name, error) => {
    let mailOptions = {
        from: "@gmail.com",
        to: "@gmail.com",
        subject: "Asunto",
        text: msg,
        html: `
            <h1>${ name }</h1>
            <h3>${ from }</h3>
        `,
    };

    conexionEmail.sendMail(mailOptions, function (err, info) {
        if (err) {
            return error;
        }
        else {
            return info.response;
        }
    });
}
