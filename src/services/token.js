import jwt from 'jsonwebtoken';

export const jsonWTSend = (expires, id) => {
    const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: expires
    });

    return token;
}

export const jsonWTVerify = ( token ) => {
    const decoded = jwt.verify(token, process.env.SECRET);

    return decoded;
}
