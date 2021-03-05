import Role from '../models/roles';
import path from 'path'
import fs from 'fs-extra'

export const createRoles = async () => {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
        new Role({name: "user"}).save(),
        new Role({name: "admin"}).save()
    ]);

    console.log(values);
}

export const createPublic = async () => {
    fs.mkdir(path.join(__dirname, "../public"), () => {
        console.log("");
    });
    fs.mkdir(path.join(__dirname, "../public/images"), () => {
        console.log("");
    });
}
