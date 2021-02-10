import { Schema, model } from 'mongoose';

const emailSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    menssage: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model("Email", emailSchema);
