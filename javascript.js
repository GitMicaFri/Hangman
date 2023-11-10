let savedWord; // vilket ord används, ordet som genereras när man startar spelet 
let guessedLetters = []; // vår array som vi pushar upp samtliga gissningar
let wrongGuessedLetters = [];

let startButton = document.getElementById('newGame'); // hämtar start knappen
let wordContainer = document.getElementById('wordContainer'); // För att få tag i p-taggarna
let wrongGuessedLettersElement = document.getElementById('wrongGuessedLetters'); // hämtar element för dem bokstäver som är fel
let rightGuessesLettersElement = document.getElementById('rightGuessedLetters');
const promptField = document.getElementById('prompt'); // här skapar vi en ny variabel där vi sedan hämtar HTML-elementet, "prompt"
let win = document.getElementById('win');
let loose = document.getElementById('loose');

// vi skapar en funktion för att få fram ett slumpmässigt ord
function getWordFromList() {
    let wordList = ['bil', 'vin', 'banan', 'cykel', 'varm', 'ko', 'tal', 'visa', 'hosta', 'kola', 'burk']; // gör denna lokal, då vi inte har något nytta av den utanför 
    let randomWord = wordList[Math.floor(Math.random() * wordList.length + 1)];
    return randomWord;
}

// funktionen som ger användaren gissningar och visar om det blev rätt eller fel 
function makeGuess() {
    // vi skapar displayWord, variabeln som kommer att visa resultatet sen, och gör den tom
    let displayWord = ''; 

    for (let letter of savedWord) {  // Loopar igenom varje bokstav i det ord som ska gissas
        // savedWord, är i detta fallet det slumpmässiga ordet, där rätt bokstav ska finnas. 
        // letter representerar varje bokstav i ordet, vilket ger oss möjligheten att gå igenom en bokstav i taget
        if (guessedLetters.includes(letter)) {
            displayWord += letter + ' '; // här vill vi ju visa delar av ordet, men vi lägger också till den gissade bokstaven, om den inkluderas i ordet
            guessedLetters.push(letter)
        } else {
            displayWord += '_ '; // eftersom personen gissat fel, så kommer inte letter utan, utan bara blankt
        }
    }
    return displayWord.trim(); // trim() tar bort det extra mellanrummet
}

function updateUI() {
    wordContainer.textContent = makeGuess();

    wrongGuessedLettersElement.textContent = 'Felaktiga gissningar: ' + guessedLetters.filter(letter => !savedWord.includes(letter)).join(' ');
}

// startfunktionen ligger sist, då funktionerna inuti är skapade ovanför
// i denna startfunktion så ger vi värdet "savedWord", som högst upp i filen är en placeholder vi skapade 
function startGame() {
    savedWord = getWordFromList(); // här ger vi savedWord samma värde som HELA funktionen getWordFromList... savedWord, som i början var vår placeholder, är nu istället vår funktion 
    updateUI(); // detta är en funktion som ska uppdatera siffrorna.
}

// funktionen som gissar bokstäver 
function guessTheLetter() { 
    if (!promptField.value) {  // ! innebär att om promptField.value generarerar tomt, dvs. tom sträng, value är värdet, dvs siffran / bokstaven, i promptfield, dvs det som användaren skriver 
        return; // struntar den i att köra den 
    }
    if (guessedLetters.includes(promptField.value)) { // om guessedLetters inkluderar det användaren har skrivit in
        alert('Du har redan gissat på den bokstaven.');
        promptField.value = '';
        return;
    } else {
        guessedLetters.push(promptField.value); // här pushar vi in den bokstaven vi valde i prompten, dvs. promptField.value till vår array
        promptField.value = '';
    }
    updateUI();

    if(youWin()) {
        alert('Du vann!!')
    } else if(youLoose()) {
        alert('Tyvärr! Du förlorade..')
    }
}

function youWin() {
    return savedWord.split('').every((letter) => guessedLetters.includes(letter));
}
function youLoose() {
    let maxGuesses = 6;
    guessedLetters.length >= maxGuesses;

    return guessedLetters.filter(letter => !savedWord.includes(letter)).length >= maxGuesses;
}

startButton.addEventListener('click', startGame);
promptField.addEventListener('keyup', guessTheLetter);