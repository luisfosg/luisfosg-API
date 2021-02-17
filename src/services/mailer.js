import Mailer from 'nodemailer';

const conexionEmail = Mailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAILFROM,
        pass: process.env.PASSWORD_EMAIL,
    }
});

export const sendEmail = async (from, msg, name, error) => {
    let mailOptions = {
        from: process.env.EMAILFROM,
        to: process.env.EMAILTO,
        subject: name,
        html: `
            <h3>from: ${ from }</h3>
            <small>Asunto: </small>
            <p>${ msg }</p>
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
