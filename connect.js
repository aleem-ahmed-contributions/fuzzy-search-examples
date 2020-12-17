// [REQUIRE] //
const mongoose = require('mongoose')


mongoose.Promise = global.Promise
mongoose.connect(
	'mongodb://localhost:27017/search-example',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	},
	(err, connected) => {
		if (connected) { console.log('Mongoose Connected to DB') }
		else { console.log(`Mongoose Connection Error --> ${err}`) }
	}
)

module.exports = {
	mongoose
}