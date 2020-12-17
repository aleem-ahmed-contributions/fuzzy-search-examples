// [REQUIRE] //
const { mongoose } = require('../connect')
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching')


const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
}).plugin(
  mongoose_fuzzy_searching,
  { fields: ['firstName', 'lastName', 'email']
})


// [EXPORT] //
module.exports = mongoose.model('User', UserSchema)


