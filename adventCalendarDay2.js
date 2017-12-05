function partOne(input) {
    const rows = input.split('\n');
    return rows.map(row => {
        const numericRow = row.split('\t').map(numberString => { return parseInt(numberString, 10); });
        const max = Math.max(...numericRow);
        const min = Math.min(...numericRow);
        return max - min;
    }).reduce((total, sum) => total + sum);
};

function partTwo(input) {
    const rows = input.split('\n');
    return rows.map(row => {
          const numericRow = row.split('\t').map(numberString => { return parseInt(numberString, 10); });
          for (i=0;i<numericRow.length;i++) {
            for (j=0;j<numericRow.length;j++) {
                if (i === j || numericRow[i] < numericRow[j]) continue;
                  if (numericRow[i]%numericRow[j] === 0) return numericRow[i] / numericRow[j];
            }
        }
    }).reduce((total, quotient) => total + quotient)
}