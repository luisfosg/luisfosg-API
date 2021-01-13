import { Schema, model } from 'mongoose';

const proyectSchema = new Schema({
    imgUrl: String,
    name: String,
    description: String,
    github: String,
    url: String
}, {
    timestamps: true,
    versionKey: false
});

export default model("Proyect", proyectSchema);
