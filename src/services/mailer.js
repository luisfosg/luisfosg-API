import Mailer from 'nodemailer';

import Email from '../models/emails';

const conexionEmail = Mailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAILFROM,
        pass: process.env.PASSWORD_EMAIL
    }
});

export const sendEmail = async (from, msg, name, id) => {
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

    conexionEmail.sendMail(mailOptions, async function (err, info) {
        if (err) {
            await Email.findByIdAndUpdate(id, { response: "No enviado" });
            console.log(err);
        }
        else {
            await Email.findByIdAndUpdate(id, { response: "Enviado" });
            console.log(info.response);
        }
    });
}
