
let savedWord; // vilket ord används, ordet som genereras när man startar spelet 
let guessedLetters = []; // hur många rätt, kommer att läsas upp sen
let rightGuessedLetters = [];
let wrongGuessedLetters = []; // hur många fel, kommer att läsas upp sen

let startButton = document.getElementById('#newGame'); // hämtar start knappen
let wordContainer = document.getElementById('word_container'); // För att få tag i p-taggarna
let wrongGuessedLettersElement = document.getElementById('#wrongGuessedLetters'); // hämtar element för de gissade orden
const promptField = document.getElementById('prompt'); // här skapar vi en ny variabel där vi sedan hämtar HTML-elementet, "prompt"

// vi skapar en funktion för att få fram ett slumpmässigt ord
function getWordFromList() {
    let wordList = ['Bil', 'Vin', 'Banan', 'Cykel', 'Varm', 'Ko', 'Tal', 'Visa', 'Hosta', 'Kola', 'Burk']; // gör denna lokal, då vi inte har något nytta av den utanför 
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return randomWord;
}

// funktionen som ger användaren gissningar och visar om det blev rätt eller fel 
function makeGuess() {
    // vi skapar displayWord, variabeln som kommer att visa resultatet sen, och gör den tom
    let displayWord = ''; 

    for (let letter of savedWord) {  // Loopar igenom varje bokstav i det ord som ska gissas
        // word, är i detta fallet det slumpmässiga ordet, där rätt bokstav ska finnas. 
        // letter representerar varje bokstav i ordet, vilket ger oss möjligheten att gå igenom en bokstav i taget
        if (wrongGuessedLettersElement.includes(letter)) {
            displayWord += letter + ' '; // här vill vi ju visa delar av ordet, men vi lägger också till den gissade bokstaven, om den inkluderas i ordet 
        } else {
            displayWord += '_ '; // eftersom personen gissat fel, så kommer inte letter utan, utan bara blankt
        }
    }
    return displayWord.trim(); // trim() tar bort det extra mellanrummet
}


// här har vi funktionen som sedan uppdaterar USER INTERFACE, dvs det vi ser 
function updateUI () {
    wordToGuessElement.textContent = makeGuess(); // här uppdaterar vi p-taggen genom DOM-en
    wrongGuessedLettersElement.textContent = 'Du har gissat på: ' + wrongGuessedLetters.join(' '); // och här uppdaterar vi HTML-dokumentetet genom att lägga in wrongGuessedLettersElement, som vi ju skapade högst upp som en placeholder
}


promptField.addEventListener('keyup', function(event) {  // Hämtar inputfältet med id och sparar i en variabel när användaren trycker enter (keyup).
    if (event.key === 'Enter') {
        let guessedLetter = event.target.value;
        hiddenWord = makeGuess(randomWord, guessedLetter); // Om bokstaven är rätt..
        makeGuess(randomWord, guessedLetter);

        if (randomWord.includes(rightGuessedLetters)) {
            randomWord.push(rightGuessedLetters); //..om rätt bokstav hamnar den här
        } else {
            wrongLetter.push(wrongGuessedLetters); // ..om fel bokstav hamnar den här
        }
        
    }
});
 

/* wordToGuessElement.textContent = 'Ny text!';
pTagRandomWord.textContent = randomWord;
let hiddenWord = randomWord.replace(/./g, '_ '); // Ersätter bokstäverna med understsreck
pTagRandomWord.textContent = hiddenWord;
 */


//Alice skriver:
//En bra plats att börja kan vara att skapa en eventlyssnare för inputfältet. Denna eventlyssnare skulle kunna triggas när användaren skriver in en bokstav och trycker på enter (eller någon annan händelse du föredrar). 

//När eventet triggas, kan du ta det värde som användaren skrev in, lägga till det i din guessedLetters-array och sedan köra makeGuess-funktionen igen. 

//För att dela upp problemet lite, kan du börja med att skapa eventlyssnaren. Hur skulle du göra det? 🤔

//Först behöver du få ordet att visas i din p-tag. Har du redan skapat en referens till din p-tag i ditt JavaScript? Om inte, hur tror du att du skulle kunna göra det? 

//dölja bokstäverna i ordet. Ett sätt att göra detta på är att byta ut varje bokstav i randomWord med ett understreck eller något liknande. Vet du hur du skulle kunna göra det? 

//Slutligen behöver du ett sätt att ta fram rätt bokstäver när användaren gissar rätt. Detta innebär att du behöver jämföra användarens gissning med varje bokstav i randomWord. Hur tror du att du skulle kunna göra det? 🕵️‍♀️




