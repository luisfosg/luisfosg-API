import jwt from 'jsonwebtoken';

export const jsonWT = (expires, id) => {
    const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: expires
    });

    return token;
}
