// //classes are not hoisted, it must be defined before using it
// try {
// 	let p = new Polygon(1, 2);
// 	console.log('Polygon p:', p);
// } catch (exception) {
// 	console.log(exception.name + ': ' + exception.message);
// }

// class Polygon {
// 	constructor(height, width) {
// 		this.height = height;
// 		this.width = width;
// 	}
// }

// p = new Polygon(1, 2);
// console.log('Polygon p:', p);

class Polygon {
	constructor(a) {
		this.sideLengths = a;
	}

	perimeter() {
		let result = this.sideLengths[0];
		for (let i = 1; i < this.sideLengths.length; i++) {
			result += this.sideLengths[i];
		}
		return result;
	}
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
// console.log(square.perimeter());
// console.log(pentagon.perimeter());
