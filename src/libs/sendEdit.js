export const sendEdit = async (id, model, req) => {
    const updateUser = await model.findByIdAndUpdate(id, { ...req },
        {
            new: true
        }
    );

    return updateUser;
}
