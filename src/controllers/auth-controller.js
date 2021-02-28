import User from '../models/user';
import Role from '../models/roles';

import { jsonWTSend } from '../services/token';
import { dbEdit, asignandoRoles } from '../libs/reutilizable';

export const signIn = async (req, res) => {
    const { name, password } = req.body;

    const findUser = await User.findOne({ name }).populate("roles");

    if(!findUser) return res.status(400).json({ status: "User not Register" });

    const matchPassword = await User.compararContrasenia(password, findUser.password);

    if(!matchPassword) return res.status(401).json({ status: "Invalid Password" });

    const token = jsonWTSend(86400, findUser._id);

    res.status(200).json({ token });
}

export const userRegister = async (req, res) => {
    const { imgUrl, name, description, github, password, roles } = req.body;

    const findUser = await User.findOne({ name });

    if(findUser === null){
        const newUser = new User({
            imgUrl,
            name,
            description,
            github,
            password: await User.encriptarContrasenia(password)
        });

        newUser.roles = await asignandoRoles(roles, Role);

        const userSave = await newUser.save();

        const token = jsonWTSend(86400, userSave._id);

        res.status(200).json({ token });
    } else {
        res.status(404).json({ "error": "User Register"});
    }
}

export const userEdit = async (req, res) => {
    const id = req.params.id;
    const { imgUrl, name, description, github } = req.body;
    var { roles } = req.body;

    const password = await User.encriptarContrasenia(req.body.password);

    var error = false;

    roles = await asignandoRoles(roles, Role);

    let findUserById = await User.findById(id)
        .catch(() => {
            error = true;
        }
    );

    if(!findUserById || error){
        res.status(404).json({ "error": "User not Register"});
    } else {
        const info = await dbEdit(User, id, name, { imgUrl, description, github, password, roles });

        if(info.error) {
            res.status(404).json(info);
        } else {
            res.status(200).json(info);
        }
    }
}

export const userDelete = async (req, res) => {
    const id = req.params.id;
    var error = false;

    const deleteUser = await User.findByIdAndDelete(id)
        .catch(() => {
            error = true;
            res.status(404).json({ "error": "User not Register"});
        }
    );

    if(deleteUser && ( error === false ) ){
        res.status(200).json(deleteUser);
    } else {
        if(deleteUser === null) {
            res.status(404).json({ "error": "User not Register"});
        }
    }
}
