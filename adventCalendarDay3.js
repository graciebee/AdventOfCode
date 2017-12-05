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

}