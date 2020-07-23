var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function () {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	},
};

var logName = function (lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-----------');
};

var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function (lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-----------');
}.apply(person, ['es', 'en']));

// function borrowing
var person2 = {
	firstname: 'Jane',
	lastname: 'Doe',
};

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
	return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));
// function multiplyByTwo(b) {
// 	return 2 * b;
// }

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
// function multiplyByThree(b) {
// 	return 3 * b;
// }

const curriedMultiply = (a) => (b) => a * b;
const curriedMultiply1 = (a) => (b) => {
	return a * b;
};
const curriedMultiplyBy5 = curriedMultiply(5);
var curriedMultiplyBy6 = curriedMultiply.bind(this, 6);

console.log(curriedMultiply(5)(3));
console.log(curriedMultiply1(5)(3));
console.log(curriedMultiplyBy5(4));
console.log(curriedMultiplyBy6(4));
