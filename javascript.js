

// vi skapar en lista med ord. 
let words = ['Bil', 'Vin', 'Banan', 'Cykel', 'Varm', 'Ko', 'Tal', 'Visa', 'Hosta', 'Kola', 'Burk'];

let  rightLetter = [];
let wrongLetter = [];

// vi skapar en funktion för att få fram ett slumpmässigt ord
    function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
    }

     randomWord = words[Math.floor(Math.random() * words.length)]; 

    function makeGuess(word, guessedLetters) {

        // vi skapar displayWord, variabeln som kommer att visa resultatet sen, och gör den tom
          let displayWord = ''; 
            for (let letter of word) {  // Loopar igenom varje bokstav i det ord som ska gissas
                // word, är i detta fallet det slumpmässiga ordet, där rätt bokstav ska finnas. 
                // letter representerar varje bokstav i ordet, vilket ger oss möjligheten att gå igenom en bokstav i taget
                if (guessedLetters.includes(letter)) {
                    displayWord += letter + ' '; // här vill vi ju visa delar av ordet, men vi lägger också till den gissade bokstaven, om den inkluderas i ordet 
                } else {
                    displayWord += '_ '; // eftersom personen gissat fel, så kommer inte letter utan, utan bara blankt
                }
            }
            return displayWord.trim(); // tar bort det extra mellanrummet
        }

     randomWord = chooseWord(); // Väljer ett slumpmässigt ord
console.log(randomWord); // visa vad det slumpmässiga ordet är 
console.log(makeGuess(randomWord, 'e')); // Testar makeGuess med det slumpmässigt valda ordet, randomWord

 ////////////// Ny kod////////////////

let inputLetter = document.getElementById('inputLetter'); 
inputLetter.addEventListener('keyup', function(event) {  // Hämtar inputfältet med id och sparar i en variabel när användaren trycker enter (keyup).
    if (event.key === 'Enter') { 
        let guessedLetter = event.target.value;
        hiddenWord = makeGuess(randomWord, guessedLetter); // Om bokstaven är rätt..
        makeGuess(randomWord, guessedLetter);
            if (randomWord.includes(guessedLetter)) {
                rightLetter.push(guessedLetter); //..om rätt bokstav hamnar den här
            } else {
                wrongLetter.push(guessedLetter); // ..om fel bokstav hamnar den här
            }
        
    }
});
 
let wordToGuessElement = document.getElementById('word_to_guess'); // För att få tag i p-taggarna
let guessedLettersElement = document.getElementById('guessed_letters');

wordToGuessElement.textContent = 'Ny text!';

let pTagRandomWord = document.getElementById('word_to_guess'); // Gör så att ett random Word hamnar i första p-taggen
pTagRandomWord.textContent = randomWord;
let hiddenWord = randomWord.replace(/./g, '_ '); // Ersätter bokstäverna med understsreck
pTagRandomWord.textContent = hiddenWord;



//Alice skriver:
//En bra plats att börja kan vara att skapa en eventlyssnare för inputfältet. Denna eventlyssnare skulle kunna triggas när användaren skriver in en bokstav och trycker på enter (eller någon annan händelse du föredrar). 

//När eventet triggas, kan du ta det värde som användaren skrev in, lägga till det i din guessedLetters-array och sedan köra makeGuess-funktionen igen. 

//För att dela upp problemet lite, kan du börja med att skapa eventlyssnaren. Hur skulle du göra det? 🤔

//Först behöver du få ordet att visas i din p-tag. Har du redan skapat en referens till din p-tag i ditt JavaScript? Om inte, hur tror du att du skulle kunna göra det? 

//dölja bokstäverna i ordet. Ett sätt att göra detta på är att byta ut varje bokstav i randomWord med ett understreck eller något liknande. Vet du hur du skulle kunna göra det? 

//Slutligen behöver du ett sätt att ta fram rätt bokstäver när användaren gissar rätt. Detta innebär att du behöver jämföra användarens gissning med varje bokstav i randomWord. Hur tror du att du skulle kunna göra det? 🕵️‍♀️




