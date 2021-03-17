import { Schema, model } from 'mongoose';

const proyectSchema = new Schema({
    es: [{
        name: { type: String },
        description: { type: String },
    }],
    en: [{
        name: { type: String },
        description: { type: String },
    }],
    imgUrl: { type: String },
    github: { type: String },
    url: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default model("Proyect", proyectSchema);
