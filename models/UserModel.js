// [REQUIRE] //
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching')


// [REQUIRE] Personal // 
const { mongoose } = require('../connect')


// [EXPORT] //
module.exports = mongoose.model(
	'User',
	new mongoose.Schema({
		firstName: String,

		lastName: String,

		email: String,

		bio: String,

		age: Number,
	}).plugin(
		mongoose_fuzzy_searching,
		{
			fields: [
				{
					name: 'firstName',
					minSize: 2,
					weight: 5,
				},
				{
					name: 'lastName',
					minSize: 2,
					weight: 5,
				},
				{
					name: 'email',
					minSize: 2,
					weight: 5,
				},
				{
					name: 'bio',
					minSize: 5,
					weight: 5,
				},
			]
		}
	)
)


