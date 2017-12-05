function partOne(passphrases) {
    passphraseArray = passphrases.split('\n');
    
    return passphraseArray.map(passphrase => {
        let validPassphrase = true;
        const passwordArray = passphrase.split(' ');

        for (i=0;i<passwordArray.length-1;i++) {
            const password = passwordArray[i];
            for (j=i+1;j<passwordArray.length;j++) {
                const otherPassword = passwordArray[j];
                if (password.length !== otherPassword.length) continue;
                if (password == otherPassword) {
                    validPassphrase = false;
                    break;
                }
            }
            if (!validPassphrase) break;
        }
        return validPassphrase;
    }).filter(passphrase => passphrase).length;
};

function partTwo(passphrases) {
    passphraseArray = passphrases.split('\n');

    return passphraseArray.map(passphrase => {
        let validPassphrase = true;
        const passwordArray = passphrase.split(' ');

        for (i=0;i<passwordArray.length-1;i++) {
            const password = passwordArray[i].split('').sort().join('');
            for (j=i+1;j<passwordArray.length;j++) {
                const otherPassword = passwordArray[j].split('').sort().join('');
                if (password.length !== otherPassword.length) continue;
                if (password == otherPassword) {
                    validPassphrase = false;
                    break;
                }
            }
            if (!validPassphrase) break;
        }
        return validPassphrase;
    }).filter(passphrase => passphrase).length;
};
