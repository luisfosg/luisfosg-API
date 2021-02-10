import Email from "../models/emails";

export const resEmail = async (req, res) => {
    const { name, email, menssage } = req.body;
    const newEmail = new Email({ name, email, menssage });

    const emailSave = await newEmail.save();

    res.status(201).json(emailSave);
}
