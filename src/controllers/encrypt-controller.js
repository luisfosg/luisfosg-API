import { decripText, encripText } from '../services/encrypt';

export const encrypt = async ( req, res ) => {
	const { psw } = req.params;
	let { txt } = req.params;

	txt = txt.split( '-' ).join( ' ' );

	const text = await encripText( txt, psw );

	res.status( 200 ).json( { text } );
};

export const decrypt = async ( req, res ) => {
	const { txt, psw } = req.params;

	const text = await decripText( txt, psw );

	res.status( 200 ).json( { text } );
};
