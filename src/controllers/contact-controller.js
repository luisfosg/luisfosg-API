import Email from "../models/emails";
import { sendEmail } from '../services/mailer';

export const resEmail = async (req, res) => {
    const { name, email, message } = req.body;
    const newEmail = new Email({ name, email, message });

    const emailSave = await newEmail.save();

    sendEmail(email, message, name, emailSave._id);

    res.status(201).json(emailSave);
}

export const getEmail = async (req, res) => {
    const id = req.params.id;

    res.status(200).json(id);
}

export const getEmails = async (_req, res) => {
    res.status(200).json({ "status": "emails"});
}

export const deleteEmail = async (req, res) => {
    const id = req.params.id;

    res.status(200).json(id);
}
