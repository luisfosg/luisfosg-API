import jwt from 'jsonwebtoken';

import User from '../models/user';
import Role from '../models/roles';

export const signIn = async (req, res) => {
    const { name, password } = req.body;
    res.status(200).json({ status: name });
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

        const token = jwt.sign({id: userSave._id}, process.env.SECRET, {
            expiresIn: 86400
        });

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

    const findUserById = await User.findById(id)
        .catch(() => {
            error = true;
            res.status(404).json({ "error": "User not Register"});
        }
    );

    if(!findUserById || error){
        if(!error){
            res.status(404).json({ "error": "User not Register"});
        }
    } else {
        const findUser = await User.findOne({ name });

        if(findUser === null){
            if(name === "") {
                const updateUser = await sendEdit( id, { imgUrl, description, github, password, roles});
                res.status(200).json(updateUser);
            } else {
                const updateUser = await sendEdit( id, { imgUrl, name, description, github, password, roles});
                res.status(200).json(updateUser);
            }

        } else {
            if(name === ""){
                const updateUser = await sendEdit( id, { imgUrl, description, github, password, roles});
                res.status(200).json(updateUser);
            } else {
                res.status(404).json({ "error": "User Register"});
            }
        }
    }
}

async function sendEdit(id, req){
    const updateUser = await User.findByIdAndUpdate(id, { ...req },
        {
            new: true
        }
    );

    return updateUser;
}

export const userDelete = async (req, res) => {
    const id = req.params.id;

    const deleteUser = await User.findByIdAndDelete(id);
    if(deleteUser){
        res.status(200).json(deleteUser);
    } else {
        res.status(404).json({ "error": "User not Register"});
    }
}
