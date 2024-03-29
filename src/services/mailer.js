import Mailer from 'nodemailer';

import Email from '../models/emails';

const conexionEmail = Mailer.createTransport( {
	service: process.env.SERVICE,
	auth: {
		user: process.env.EMAILFROM,
		pass: process.env.PASSWORD_EMAIL,
	},
} );

export const sendEmail = async ( from, msg, name, id ) => {
	const mailOptions = {
		from: process.env.EMAILFROM,
		to: process.env.EMAILTO,
		subject: name,
		html: `
            <h3>from: ${ from }</h3>
            <small>Asunto: </small>
            <p>${ msg }</p>
        `,
	};

	try {
		conexionEmail.sendMail( mailOptions, async ( err, _info ) => {
			if ( err ) {
				await Email.findByIdAndUpdate( id, { response: 'No enviado' } );
			} else {
				await Email.findByIdAndUpdate( id, { response: 'Enviado' } );
			}
		} );
	} catch ( error ) {
		await Email.findByIdAndUpdate( id, { response: 'No enviado' } );
	}
};
