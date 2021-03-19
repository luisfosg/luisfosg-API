import mongoose from 'mongoose';

const connection = process.env.MONGOCONNECTION;

mongoose.connect( connection, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
} )
	.then( ( _db ) => console.log( '\n Db is Connected \n' ) )
	.catch( ( _err ) => console.log( '\n Db has an error' ) );
