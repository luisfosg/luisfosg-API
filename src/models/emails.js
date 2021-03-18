import { Schema, model } from 'mongoose';

const emailSchema = new Schema( {
	name: { type: String, required: true },
	email: { type: String, required: true },
	message: { type: String, required: true },
	response: { type: String, default: '' },
}, {
	timestamps: true,
	versionKey: false,
} );

export default model( 'Email', emailSchema );
