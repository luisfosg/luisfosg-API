import multer from 'multer';
import path from 'path';

const storageImage = multer.diskStorage( {
	destination( _req, _file, cb ) {
		cb( null, path.resolve( __dirname, '../public/images' ) );
	},
	filename( _req, file, cb ) {
		cb( null, file.originalname );
	},
} );

export const uploadImage = multer( { storage: storageImage } );
