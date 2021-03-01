import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
    name: String,
}, {
    timestamps: true,
    versionKey: false
});

export default model("Image", imageSchema);
