let savedWord; // vilket ord används, ordet som genereras när man startar spelet 
let guessedLetters = []; // vår array som vi pushar upp samtliga gissningar
let guessWrong = 0; 

let startButton = document.getElementById('newGame'); // hämtar start knappen
let wordContainer = document.getElementById('wordContainer'); // För att få tag i p-taggarna
let wrongGuessedLettersElement = document.getElementById('wrongGuessedLetters'); // hämtar element för dem bokstäver som är fel
let rightGuessesLettersElement = document.getElementById('rightGuessedLetters');
const promptField = document.getElementById('prompt'); // här skapar vi en ny variabel där vi sedan hämtar HTML-elementet, "prompt"

// vi skapar en funktion för att få fram ett slumpmässigt ord
function getWordFromList() {
    let wordList = ['bil', 'vin', 'banan', 'cykel', 'varm', 'ko', 'tal', 'visa', 'hosta', 'kola', 'burk']; // gör denna lokal, då vi inte har något nytta av den utanför 
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
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
        } else {
            displayWord += '_ '; // eftersom personen gissat fel, så kommer inte letter utan, utan bara blankt
        }
    }
    return displayWord.trim(); // trim() tar bort det extra mellanrummet
}

// här har vi funktionen som sedan uppdaterar USER INTERFACE, dvs det vi ser 
function updateUI() {
    wordContainer.textContent = makeGuess(); // här uppdaterar vi p-taggen genom DOM-en

    // Filtrer vi ut alla bokstäver som användaren gissar på men som inte stämmer överens med rätt bokstav i de slumpade ordet.
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
        promptField.value = ''; // resetar vårt inputfält till tom efter alert
        return;
    } else {
        guessedLetters.push(promptField.value); // här pushar vi in den bokstaven vi valde i prompten, dvs. promptField.value till vår array
        guessWrong++; // Öka guessWrong varje gång en felaktig gissning görs
        promptField.value = ''; // resetar vårt inputfält till tom efter alert
    }
    updateUI();
    showPictures();

    // if statement som kör våra vinst eller förlust funktioner och lägger till en alert med meddelande.
    if(youWin()) {
        alert('Grattis! Du vann!');
        promptField.value = '';
        guessedLetters = [];
        startGame();
    } else if(youLoose()) {
        alert('Tyvärr! Du förlorade..');
        promptField.value = '';
        guessedLetters = [];
        startGame();
    }
}

// youWin funktionen körs när spelaren har lyckats gissa rätt på ordet innan gubben är hängd.
function youWin() {
    return savedWord.split('').every((letter) => guessedLetters.includes(letter));
}
// youLoose körs om spelaren förlorar
function youLoose() {
    // skapar en variabel med max gissningar på 6. För att spelaren endast ska kunna gissa på en bokstav 6 gånger innan han blir hängd.
    let maxGuesses = 6;
    guessedLetters.length >= maxGuesses;

    return guessedLetters.filter(letter => !savedWord.includes(letter)).length >= maxGuesses;
}

startButton.addEventListener('click', startGame);
promptField.addEventListener('keyup', guessTheLetter);





///////  Ny kod till bilderna /////////
function showPictures() {
    document.getElementById('mainHangmanImage').style.display = 'none';
    document.getElementById('bara_stolpen').style.display = 'none';
    document.getElementById('snara_huvud').style.display = 'none';
    document.getElementById('snara_huvud_arm').style.display = 'none';
    document.getElementById('snara_huvud_arm_kropp').style.display = 'none';
    document.getElementById('finito').style.display = 'none';

    let incorrectGuesses = guessedLetters.filter(letter => !savedWord.includes(letter)).length;
    switch (incorrectGuesses) {
        case 0:
            document.getElementById('mainHangmanImage').style.display = 'block';
            break;
        case 1:
            document.getElementById('bara_stolpen').style.display = 'block';
            break;
        case 2:
            document.getElementById('snara_huvud').style.display = 'block';
            break;
        case 3:
            document.getElementById('snara_huvud_arm').style.display = 'block';
            break;
        case 4:
            document.getElementById('snara_huvud_arm_kropp').style.display = 'block';
            break;
        case 5:
            document.getElementById('finito').style.display = 'block';
            break;
    }
}

startGame(); // webbläsaren kommer hoppa direkt hit och köra startgame
showPictures(); // därefter kommer den att köra showPictures 