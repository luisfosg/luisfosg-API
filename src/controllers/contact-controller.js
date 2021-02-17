import Email from "../models/emails";
import { sendEmail } from '../services/mailer';

export const resEmail = async (req, res) => {
    const { name, email, message } = req.body;
    const newEmail = new Email({ name, email, message });

    const emailSave = await newEmail.save();

    sendEmail(email, message, name, "Email no Enviado");

    res.status(201).json(emailSave);
}

export const getEmail = async (req, res) => {
}

export const getEmails = async (req, res) => {
}

export const deleteEmail = async (req, res) => {

}

export const editEmail = async (req, res) => {

}
