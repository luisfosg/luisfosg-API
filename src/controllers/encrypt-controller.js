import { decripText, encripText } from '../services/encrypt';

export const encrypt = async (req, res) => {
    let { txt, psw } = req.params;
    txt = txt.replaceAll("-", " ");

    const text = await encripText(txt, psw);

    res.status(200).json({ text });
}

export const decrypt = async (req, res) => {
    const { txt, psw } = req.params;

    const text = await decripText(txt, psw);

    res.status(200).json({ text });
}
