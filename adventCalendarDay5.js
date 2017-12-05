function partOne(instructions) {
    let instructionArray = instructions.split(`\n`).map(instruction => parseInt(instruction,10));
    let steps = 0;
    let index = 0;
    do {
        steps++;
        const newIndex = index + instructionArray[index];  
        instructionArray[index]++;
        index = newIndex;   
    } while(index < instructionArray.length);
    return steps;
}

function partTwo(instructions) {
    let instructionArray = instructions.split(`\n`).map(instruction => parseInt(instruction,10));
    let steps = 0;
    let index = 0;
    do {
      steps++;
      const newIndex = index + instructionArray[index];
      instructionArray[index] += instructionArray[index] < 3 ? 1 : -1; 
      index = newIndex;
    } while(index < instructionArray.length);
    return steps;
}