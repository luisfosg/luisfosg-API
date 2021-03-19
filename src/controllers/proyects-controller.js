import Proyect from '../models/proyects';

import { sendEdit } from '../libs/reusable';

export const sendProyect = async ( req, res ) => {
	const {
		imgUrl,
		nameEs,
		nameEn,
		descriptionEs,
		descriptionEn,
		github,
		url,
	} = req.body;

	const es = { name: nameEs, description: descriptionEs };
	const en = { name: nameEn, description: descriptionEn };

	const newProyect = new Proyect( {
		es, en, imgUrl, github, url,
	} );

	const proyectSave = await newProyect.save();

	res.status( 200 ).json( proyectSave );
};

export const editProyect = async ( req, res ) => {
	const { id } = req.params;

	const {
		imgUrl,
		nameEs,
		nameEn,
		descriptionEs,
		descriptionEn,
		github,
		url,
	} = req.body;

	const es = { name: nameEs, description: descriptionEs };
	const en = { name: nameEn, description: descriptionEn };

	let error = false;

	const findProyect = await Proyect.findById( id )
		.catch( () => {
			error = true;
		} );

	if ( !findProyect || error ) {
		res.status( 404 ).json( { error: 'Proyect does not Exist' } );
	} else {
		const info = await sendEdit( Proyect, id, {
			es, en, imgUrl, github, url,
		} );
		res.status( 200 ).json( info );
	}
};

export const getProyects = async ( _req, res ) => {
	const proyects = await Proyect.find();

	res.status( 200 ).json( proyects );
};

export const countProyect = async ( req, res ) => {
	let count = req.params.num;

	try {
		count = parseInt( count, 10 );

		if ( count === 0 ) {
			res.status( 200 ).json( [] );
		} else {
			const proyects = await Proyect.find().limit( count );
			res.status( 200 ).json( proyects );
		}
	} catch ( error ) {
		res.status( 505 ).json( { error: 'It is not a permitted number ' } );
	}
};

export const getProyect = async ( req, res ) => {
	const { id } = req.params;
	let error = false;

	const proyect = await Proyect.findById( id )
		.catch( () => {
			error = true;
		} );

	if ( !proyect || error ) {
		res.status( 404 ).json( { error: 'Proyect does not Exist' } );
	} else {
		res.status( 200 ).json( proyect );
	}
};

export const deleteProyect = async ( req, res ) => {
	const { id } = req.params;
	let error = false;

	const deleteProyect = await Proyect.findByIdAndDelete( id )
		.catch( () => {
			error = true;
		} );

	if ( !deleteProyect || error ) {
		res.status( 404 ).json( { error: 'Proyect does not Exist' } );
	} else {
		res.status( 200 ).json( deleteProyect );
	}
};
