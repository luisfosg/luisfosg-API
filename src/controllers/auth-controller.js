import User from '../models/user';

export const signIn = async (req, res) => {
    const { name, password } = req.body;
    res.status(200).json({ status: name });
}

export const signUp = async (req, res) => {
    const { imgUrl, name, description, github, password, roles } = req.body;

    const newUser = new User({
        imgUrl,
        name,
        description,
        github,
        password: User.encriptarContrasenia(password),
        roles
    });
    console.log(newUser);

    res.status(200).json({ status: "OK" });
}

export const userEdit = async (req, res) => {
    const { imgUrl, name, description, github, password, roles } = req.body;
    res.status(200).json({ status: "OK" });
}

export const userDelete = async (req, res) => {
    const { id } = req.params.id;
    res.status(200).json({ status: "OK" });
}
