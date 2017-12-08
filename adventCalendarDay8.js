function partOne(instructions) {
    const stringArray = input.split('\n');
    let variableDictionary = {};
    stringArray.forEach(stringInstruction => {
        const instructionArray = stringInstruction.split(' ');
        variableDictionary[instructionArray[0]] = 0;
    });
    const instructionArray = stringArray.map(stringInstruction => new Instruction(stringInstruction));
    instructionArray.forEach(instruction => {
        variableDictionary = instruction.evaluate(variableDictionary);
    });
    return Math.max(...Object.keys(variableDictionary).map(key => variableDictionary[key]));
}

function partTwo(instructions) {
    const stringArray = input.split('\n');
    let variableDictionary = {};
    stringArray.forEach(stringInstruction => {
        const instructionArray = stringInstruction.split(' ');
        variableDictionary[instructionArray[0]] = 0;
    });
    const instructionArray = stringArray.map(stringInstruction => new Instruction(stringInstruction));
    let max = 0;
    instructionArray.forEach(instruction => {
        variableDictionary = instruction.evaluate(variableDictionary);
        max = Math.max(...Object.keys(variableDictionary).map(key => variableDictionary[key]), max);
    });
    return max;
}

class Instruction {
    constructor(instructionString) {
        const instructionArray = instructionString.split(' ');
        this.variable = instructionArray[0];
        this.increment = instructionArray[1] == "inc" 
            ? parseInt(instructionArray[2], 10)
            : parseInt(instructionArray[2], 10) * -1;
      	
        this.comparator = instructionArray[4];
        this.comparison = `${instructionArray[5]} ${instructionArray[6]}`;
    }
	
    evaluate(dictionary) {
        const evalString = `${dictionary[this.comparator]} ${this.comparison}`;
        if (eval(evalString)) {
            dictionary[this.variable] += this.increment;
        }
        return dictionary;
    }
}
