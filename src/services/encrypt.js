import Cryptr from 'cryptr';

export const encripText = async ( text, password ) => {
    const encode = new Cryptr(password);

    try {
        text = encode.encrypt(text);
    } catch (error) {
        text = "";
    }

    return text;
}

export const decripText = async ( text, password ) => {
    const encode = new Cryptr(password);

    try {
        text = encode.decrypt(text);
    } catch (error) {
        text = "";
    }

    return text;
}
