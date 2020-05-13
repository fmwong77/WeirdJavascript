String.prototype.isLengthGreaterThan = function (limit) {
	return this.length > limit;
};

console.log('John'.isLengthGreaterThan(3));

Number.prototype.isPositive = function () {
	return this > 0;
};

Array.prototype.myCustomerFeature = 'cool';
var arr = [1, 2, 3];
for (const ele of arr) {
	console.log(ele);
}
