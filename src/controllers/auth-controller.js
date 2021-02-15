import User from '../models/user';

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
            password: await User.encriptarContrasenia(password),
            roles
        });

        const userSave = await newUser.save();

        res.status(200).json(userSave);
    } else {
        res.status(404).json({ "error": "User Register"});
    }
}

export const userEdit = async (req, res) => {
    const id = req.params.id;
    const { imgUrl, name, description, github, roles } = req.body;
    const password = await User.encriptarContrasenia(req.body.password);

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

async function sendEdit(id, req){
    const updateUser = await User.findByIdAndUpdate(id, { ...req });
    return updateUser;
}

export const userDelete = async (req, res) => {
    const id = req.params.id;

    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json(deleteUser);
}
