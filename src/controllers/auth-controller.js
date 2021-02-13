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
    const { id } = req.params.id;
    const { imgUrl, name, description, github, password, roles } = req.body;
    const updateUser = await User.findOneAndUpdate(id, { name, imgUrl, description, github, password, roles }, { new: true });
    res.status(200).json(updateUser);
}

export const userDelete = async (req, res) => {
    const { id } = req.params.id;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json(deleteUser);
}
