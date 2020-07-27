//classes are not hoisted, it must be defined before using it
try {
	let p = new Polygon(1, 2);
	console.log('Polygon p:', p);
} catch (exception) {
	console.log(exception.name + ': ' + exception.message);
}

class Polygon {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

p = new Polygon(1, 2);
console.log('Polygon p:', p);
