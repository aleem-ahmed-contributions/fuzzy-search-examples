const FuzzySearch = require('fuzzy-search')


// fake mongodb data
const people = [
	{
		name: {
			firstName: 'Jesse',
			lastName: 'Bowen',
		},
		state: 'Seattle',
	}
]

const searcher = new FuzzySearch(
	people,
	['name.firstName', 'state'],
	{ caseSensitive: true, }
)

const result = searcher.search('ess')

console.log(result)