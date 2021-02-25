import Email from "../models/emails";
import { sendEmail } from '../services/mailer';

export const resEmail = async (req, res) => {
    const { name, email, message } = req.body;
    const newEmail = new Email({ name, email, message });

    const emailSave = await newEmail.save();

    sendEmail(email, message, name, emailSave._id);

    res.status(201).json(emailSave);
}

export const getEmails = async (_req, res) => {
    const emails = await Email.find();

    res.status(200).json(emails);
}

export const getEmail = async (req, res) => {
    const id = req.params.id;
    var error = false;

    const email = await Email.findById(id)
        .catch(() => {
            error = true;
        }
    );

    if(!email || error){
        res.status(404).json({ "error": "Email does not Exist"});
    } else {
        res.status(200).json(email);
    }
}

export const deleteEmail = async (req, res) => {
    const id = req.params.id;

    var error = false;

    const deleteEmail = await Email.findByIdAndDelete(id)
        .catch(() => {
            error = true;
        }
    );

    if(!deleteEmail || error){
        res.status(404).json({ "error": "Email does not Exist"});
    } else {
        res.status(200).json(deleteEmail);
    }
}
