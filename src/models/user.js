import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    imgUrl: String,
    name: { type: String, required: true },
    description: String,
    github: String,
    password: { type: String, required: true },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encriptarContrasenia = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.compararContrasenia = async (password, comparepassword) => {
    return await bcrypt.compare(password, comparepassword);
}

export default model("User", userSchema);
