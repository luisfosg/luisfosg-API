export const sendEdit = async ( model, id, req ) => {
	const updateUser = await model.findByIdAndUpdate( id, { ...req },
		{
			new: true,
		} );

	return updateUser;
};

export const dbEdit = async ( model, id, name, req ) => {
	const findUser = await model.findOne( { name } );

	if ( !findUser ) {
		if ( name === '' ) {
			const updateUser = await sendEdit( model, id, req );
			return updateUser;
		}
		const updateUser = await sendEdit( model, id, { ...req, name } );
		return updateUser;
	}
	if ( name === '' ) {
		const updateUser = await sendEdit( model, id, req );
		return updateUser;
	}
	return { error: 'User Register' };
};

const userRole = async ( Role ) => {
	const role = await Role.findOne( { name: 'user' } );
	return [role._id];
};

export const assignRoles = async ( Role, roles ) => {
	if ( roles ) {
		const foundRoles = await Role.find( { name: { $in: roles } } );
		if ( foundRoles.length === 0 ) return userRole( Role );

		return foundRoles.map( ( role ) => role._id );
	}
	return userRole( Role );
};
