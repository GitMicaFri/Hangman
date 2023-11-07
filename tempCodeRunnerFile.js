let wordList = ['Krona', 'Bin', 'Vin', 'Bil', 'Vinter'];

let randomWord = wordList[Math.floor(Math.random() * wordList.length)];

let rightGuesses = [];
let wrongGuesses = []; 
let userGuess = 'i';

function theHangman() {
    let splittedWord = randomWord.split(''); 

    for (let i = 0; i < splittedWord.length; i++) { 
        let letter = splittedWord[i]; 
        if (userGuess.includes(letter)) { 
            splittedWord += letter + ' ';
    }   else {
        splittedWord += '_';
    }
    }
    console.log(splittedWord);
}

theHangman();