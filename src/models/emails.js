import { Schema, model } from 'mongoose';

const emailSchema = new Schema({
}, {
    timestamps: true,
    versionKey: false
});

export default model("Proyect", emailSchema);
