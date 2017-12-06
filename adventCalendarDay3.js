function partOne(input) {
	let length = 1;    
  	for (i=1;i<input/2;i+=2) {
    	if (i*i > input) {
      		length = i;
      		break;
    	}
  	}
  	const cornerDistance = length-1;
  	const centerDistance = (length-1)/2;
  	let corner = length*length;
    do {
      	corner -= cornerDistance;
    } while (corner > input);
    const center = corner + centerDistance;
    let distance = centerDistance;
    
    if (center > input) {
      	for (i=center;i>input;i--) {
          	distance++;
      	}
    } else {
      	for (i=center;i<input;i++) {
          	distance++;
      	}
    }
    return distance;
}

function partTwo(input) {
	let matrix = new Matrix();
	do {
	  matrix.addNextCoordinate();
	} while(matrix.maxSum <= input);
	return matrix.maxSum;
}

class Coordinate {
	constructor(x, y, sum) {
		this.x = x;
		this.y = y;
		this.sum = sum;
	}

	getSumIfAdjacent(x, y) {
		if (Math.abs(x - this.x) > 1 || Math.abs(y - this.y) > 1) {
			return 0;
		} else return this.sum;
	}
}

class Matrix {
	constructor() {
		this.coordinates = [new Coordinate(0,0,1)];
		this.next = 'r';
		this.armCount = 0;
		this.lengthCount = 1;
		this.lengthMax = 1;
		this.maxSum = 1;
	}

	add(coordinate) {
		this.coordinates.push(coordinate);
	}

	addNextCoordinate() {
		let x;
		let y;
		let sum;
		switch (this.next) {
			case 'r':
				x = this.coordinates[this.coordinates.length-1].x + 1;
				y = this.coordinates[this.coordinates.length-1].y;
				sum = this.getSumOfAdjacentSums(x,y);
				this.add(new Coordinate(x,y,sum));
				this.updateDirection('u');
				break;
			case 'u':
				x = this.coordinates[this.coordinates.length-1].x;
				y = this.coordinates[this.coordinates.length-1].y + 1;
				sum = this.getSumOfAdjacentSums(x,y);
				this.add(new Coordinate(x,y,sum));
				this.updateDirection('l');
				break;
			case 'l':
				x = this.coordinates[this.coordinates.length-1].x - 1;
				y = this.coordinates[this.coordinates.length-1].y;
				sum = this.getSumOfAdjacentSums(x,y);
				this.add(new Coordinate(x,y,sum));
				this.updateDirection('d');
				break;
			case 'd':
				x = this.coordinates[this.coordinates.length-1].x;
				y = this.coordinates[this.coordinates.length-1].y - 1;
				sum = this.getSumOfAdjacentSums(x,y);
				this.add(new Coordinate(x,y,sum));
				this.updateDirection('r');
				break;
		}
	}

	getSumOfAdjacentSums(x,y) {
		const sums = this.coordinates.map(coordinate => coordinate.getSumIfAdjacent(x,y))
			.reduce((total, value) => total + value);
		this.maxSum = sums;
		return sums;
	}

	updateDirection(newDirection) { 
		if (this.lengthCount === this.lengthMax) {
			this.next = newDirection;
			this.lengthCount = 1;
			this.increaseArmCount();
		} else {
			this.lengthCount++;
		}
	}
	increaseArmCount() {
		this.armCount++;
		if (this.armCount > 1) {
			this.armCount = 0;
			this.lengthMax++;
		}
	}
}