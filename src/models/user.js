import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    imgUrl: String,
    name: { type: String, unique: true, required: true },
    description: String,
    github: String,
    password: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});

export default model("User", userSchema);
