const user = {
	name: 'Mei',
	location: {
		city: 'Austin',
		state: 'Texas',
	},
};

// Object.assign,
const copy = Object.assign({}, user);
copy.location.city = 'Albany';
console.log('origin:', user.location);
console.log('copy:', copy.location);
