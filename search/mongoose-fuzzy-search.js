const UserModel = require('../models/UserModel')


const mfs = async () => {
	try {
		// Save
		const saved = await new UserModel({
			firstName: 'joe',
			lastName: 'doe',
			email: 'brosho@example.com',
			bio: 'i love ice cream',
			age: 30
		}).save()
	

		if (saved) {
			/**
			 * Below are sample queries. these should output data.
			*/
	
	
			// query 1
			const q1 = await UserModel.fuzzySearch({
				query: 'brosho',
			})
			console.log('q1 search result:', q1)
	
	
			// query 2
			const q2 = await UserModel.fuzzySearch({
				query: 'love',
			})
			console.log('q2 search result:', q2)
	
			// query 3
			const q3 = await UserModel.fuzzySearch({
				query: 'i love',
			})
			console.log('q3 search result:', q3)
	
			// query 4
			const q4 = await UserModel.fuzzySearch({
				query: 'i cream',
			})
			console.log('q4 search result:', q4)
		}

	}
	catch (e) { console.error(e) }
}

mfs()

module.exports = {
	mfs
}