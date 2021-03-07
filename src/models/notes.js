import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: new Date() }
}, {
    timestamps: false,
    versionKey: false
});

export default model("Note", noteSchema);
