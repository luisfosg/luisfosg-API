import Note from '../models/notes';
import { encripText } from '../services/encrypt';

export const sendNote = async ( req, res ) => {
	const { title, description, encode } = req.body;
	let descrip = description;

	if ( encode === 'true' ) {
		descrip = await encripText( descrip, process.env.ENCODE );
	}

	const newNote = new Note( {
		title,
		description: descrip,
	} );

	const saveNote = await newNote.save();

	res.status( 200 ).json( saveNote );
};

export const getNote = async ( req, res ) => {
	const { id } = req.params;
	let error = false;

	const note = await Note.findById( id )
		.catch( () => {
			error = true;
		} );

	if ( !note || error ) {
		res.status( 404 ).json( { error: 'Note does not Exist' } );
	} else {
		res.status( 200 ).json( note );
	}
};

export const getNotes = async ( _req, res ) => {
	const notes = await Note.find();

	res.status( 200 ).json( notes );
};

export const editNote = async ( req, res ) => {
	const { id } = req.params;
	const { title, description, encode } = req.body;
	let error = false;
	let descrip = description;

	if ( encode === 'true' ) {
		descrip = await encripText( descrip, process.env.ENCODE );
	}

	const editNote = await Note.findByIdAndUpdate(
		id,
		{ title, description: descrip },
		{ new: true }
	).catch( () => {
		error = true;
	} );

	if ( !editNote || error ) {
		res.status( 404 ).json( { error: 'Note does not Exist' } );
	} else {
		res.status( 200 ).json( editNote );
	}
};

export const deleteNote = async ( req, res ) => {
	const { id } = req.params;
	let error = false;

	const deleteNote = await Note.findByIdAndDelete( id )
		.catch( () => {
			error = true;
		} );

	if ( !deleteNote || error ) {
		res.status( 404 ).json( { error: 'Note does not Exist' } );
	} else {
		res.status( 200 ).json( deleteNote );
	}
};
