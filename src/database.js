import mongoose from 'mongoose';

const { MONGOCONNECTION, MONGOCONNECTION_TEST, NODE_ENV } = process.env;

const connection = NODE_ENV === 'production' ? MONGOCONNECTION : MONGOCONNECTION_TEST;

mongoose.connect( connection )
	.then( ( _db ) => console.log( `\n Db is Connected in ${ NODE_ENV }` ) )
	.catch( ( _err ) => console.log( `\n Db has an error: ${ _err }` ) );

process.on( 'uncaughtException', () => {
	mongoose.connection.close();
	process.exit( 1 );
} );
