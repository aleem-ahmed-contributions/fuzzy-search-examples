const UserModel = require('../models/UserModel')


const mfs = async () => {
	try {
		await new UserModel({
			firstName: 'Joe',
			lastName: 'Doe',
			email: 'joe.doe@mail.com',
			age: 30
		}).save()
	
		const searchResult = await UserModel.fuzzySearch('jo')
		console.log('search result', searchResult)
	}
	catch (e) { console.error(e) }
}

mfs()

module.exports = {
	mfs
}