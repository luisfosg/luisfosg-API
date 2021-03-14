import Cryptr from 'cryptr';

export const encripText = async ( text, password ) => {
    const encode = new Cryptr(password);

    text = encode.encrypt(text);

    return text;
}

export const decripText = async ( text, password ) => {
    const encode = new Cryptr(password);

    text = encode.decrypt(text)

    return text;
}
