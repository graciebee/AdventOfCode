function partOne(input) {
    let inputArray = input.split(`\t`).map(num => parseInt(num, 10));
    let pastArrangements = [];
    
    do {
      pastArrangements.push(inputArray.slice());
      let value = Math.max(...inputArray);
      const index = inputArray.indexOf(value);
    
      inputArray[index] = 0;
      let currentIndex = index + 1;
      if (currentIndex >= inputArray.length) {
          currentIndex = 0;
      }
      while (value) {
          inputArray[currentIndex]++;
          currentIndex++;
          if (currentIndex >= inputArray.length) {
              currentIndex = 0;
          }
          value--;
      }
    } while (!pastArrangements.find(arrangement => arrangement.toString() == inputArray.toString()));
    return pastArrangements.length;
}

function partTwo(input) {
    let inputArray = input.split(`\t`).map(num => parseInt(num, 10));
    let pastArrangements = [];
    
    do {
      pastArrangements.push(inputArray.slice());
      let value = Math.max(...inputArray);
      const index = inputArray.indexOf(value);
    
      inputArray[index] = 0;
      let currentIndex = index + 1;
      if (currentIndex >= inputArray.length) {
          currentIndex = 0;
      }
      while (value) {
          inputArray[currentIndex]++;
          currentIndex++;
          if (currentIndex >= inputArray.length) {
              currentIndex = 0;
          }
          value--;
      }
    } while (!pastArrangements.find(arrangement => arrangement.toString() == inputArray.toString()));
    const difference = pastArrangements.indexOf(pastArrangements.find(arrangement => arrangement.toString() == inputArray.toString()));
    return pastArrangements.length-difference;
}