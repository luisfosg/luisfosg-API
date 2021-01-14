import { Schema, model } from 'mongoose';

const proyectSchema = new Schema({
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    github: { type: String, required: true },
    url: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});

export default model("Proyect", proyectSchema);
