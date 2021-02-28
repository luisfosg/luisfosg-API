import User from '../models/user';
import Role from '../models/roles';

import { jsonWTSend } from '../services/token';
import { sendEdit } from '../libs/sendEdit';

export const signIn = async (req, res) => {
    const { name, password } = req.body;

    const findUser = await User.findOne({ name }).populate("roles");

    if(!findUser) {
        return res.status(400).json({ status: "User not Register" });
    }
    const matchPassword = await User.compararContrasenia(password, findUser.password);

    if(!matchPassword){
        return res.status(401).json({ status: "Invalid Password" });
    }

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

        if(roles) {
            const foundRoles = await Role.find({ name: {$in: roles} });

            newUser.roles = foundRoles.map(role => role._id);
        } else {
            const role = await Role.findOne({ name: "user" });

            newUser.roles = [ role._id ];
        }

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

    if(roles){
        const foundRoles = await Role.find({ name: {$in: roles} });
        roles = foundRoles.map(role => role._id);

    } else {
        const role = await Role.findOne({ name: "user" });

        roles = [ role._id ];
    }

    let findUserById = await User.findById(id)
        .catch(() => {
            error = true;
        }
    );

    if(!findUserById || error){
        res.status(404).json({ "error": "User not Register"});
    } else {
        const info = await dbEdit(id, name, { imgUrl, description, github, password, roles });

        if(info.error) {
            res.status(404).json(info);
        } else {
            res.status(200).json(info);
        }
    }
}

async function dbEdit(id, name, req){

    const findUser = await User.findOne({ name });

    if(!findUser){
        if(name === "") {
            const updateUser = await sendEdit( id, User, req);
            return updateUser;
        } else {
            const updateUser = await sendEdit( id, User, { ...req, name });
            return updateUser;
        }

    } else {
        if(name === ""){
            const updateUser = await sendEdit( id, User, req);
            return updateUser;
        } else {
            return { "error": "User Register"};
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
