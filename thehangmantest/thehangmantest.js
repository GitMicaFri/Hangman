// funktion för gissningarna, dvs om man gissar rätt så ska detta hända, gissar man fel så ska detta hända 


let savedWord; // vilket ord används, ordet som genereras när man startar spelet 
let guessedLetters = []; // hur många rätt, kommer att läsas upp sen 
let guessWrong = []; // hur många fel, kommer att läsas upp sen


const startButton = document.getElementById('start'); // här hämtar vi startknappen i html
const wordContainer = document.getElementById('randomizedWordSpace');  // här hämtar vi p taggen där vi vill att ordet ska dyka upp på html sen
const promptField = document.getElementById('prompt'); // här skapar vi en ny variabel där vi sedan hämtar HTML-elementet, "prompt"
const wrongLettersContainer = document.getElementById('wrongLetters'); // detta är ännu en container, en P-tagg i HTML-dokumentet vid namn wrongLetters (se html-filen också)


// denna funktion genererar randomordet 
function getWordFromList () {
    let wordList = ['Ball', 'Legion', 'Dwarf', 'Yoga', 'Carpet']; // gör denna lokal, då vi inte har något nytta av den utanför 
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return randomWord;
}


// funktionen som ger användaren gissningar och visar om det blev rätt eller fel 
function generateGuessSoFar() { 
    let displayWord = ''; // vi lämnar denna tom just nu, då den blir en "placeholder" som används nedan för letter

    for (let letter of savedWord) {
        if (guessedLetters.includes(letter)) {
            displayWord += letter + ' ';
        } else {
            displayWord += '_ ';
        }
    }
    return displayWord;   
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
        return;
    }
    guessedLetters.push(promptField.value); // här pushar vi in den bokstaven vi valde i prompten, dvs. promptField.value
    promptField.value = '';
    updateUI();
}


// här har vi funktionen som sedan uppdaterar USER INTERFACE, dvs det vi ser 
function updateUI () {
    wordContainer.textContent = generateGuessSoFar(); // här uppdaterar vi p-taggen genom DOM-en
    wrongLettersContainer.textContent = 'Redan gissade bokstäver: ' + guessedLetters.join(' '); // och här uppdaterar vi HTML-dokumentetet genom att lägga in wrongLettersContainer, som vi ju skapade högst upp som en placeholder 

}



startButton.addEventListener('click', startGame); // OM du trycker på knappen så ska startfunktionen köras
promptField.addEventListener('input', guessTheLetter);  // detta gör så att webbläsaren känner av att du tryckt på en knapp, detta genom 'input'