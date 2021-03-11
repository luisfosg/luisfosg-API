export const sendEdit = async (model, id, req) => {
    const updateUser = await model.findByIdAndUpdate(id, { ...req },
        {
            new: true
        }
    );

    return updateUser;
}

export const dbEdit = async (model, id, name, req) => {
    const findUser = await model.findOne({ name });

    if(!findUser){
        if(name === "") {
            const updateUser = await sendEdit( model, id, req );
            return updateUser;
        } else {
            const updateUser = await sendEdit( model, id, { ...req, name } );
            return updateUser;
        }

    } else {
        if(name === ""){
            const updateUser = await sendEdit( model, id, req );
            return updateUser;
        } else {
            return { "error": "User Register"};
        }
    }
}

const userRole = async ( Role ) => {
    const role = await Role.findOne({ name: "user" });
    return [ role._id ];
}

export const asignandoRoles = async (roles, Role) => {
    if(roles) {
        const foundRoles = await Role.find({ name: {$in: roles} });
        if(foundRoles.length===0) return await userRole(Role);

        return foundRoles.map(role => role._id);
    } else {
        return await userRole(Role);
    }
}

export const encripText = async (text) => {
    text = Buffer.from(text).toString('base64');

    return text;
}
