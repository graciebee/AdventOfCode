function partOne(input) {
    const inputArray = input.split('').map(stringInt => parseInt(stringInt, 10));
    return inputArray.map((thisNum, index) => {
        const position = (index + 1) % inputArray.length;
        const nextNum = inputArray[position];         
        return thisNum === nextNum ? thisNum : 0;
    }).reduce((total, value) => total + value);
}

function partTwo(input) {
    const inputArray = input.split('').map(stringInt => { return parseInt(stringInt, 10); });
    return inputArray.map((thisNum, index) => {
        const position = (index + (inputArray.length / 2)) % inputArray.length;
        const nextNum = inputArray[position];
        return thisNum === nextNum ? thisNum : 0;
    }).reduce((total, value) => total + value);
}