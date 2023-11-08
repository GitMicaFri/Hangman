

// vi skapar en lista med ord. 
let words = ['Bil', 'Vin', 'Banan', 'Cykel', 'Varm', 'Ko', 'Tal', 'Visa', 'Hosta', 'Kola', 'Burk'];

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
            return displayWord;
        }

     randomWord = chooseWord(); // Väljer ett slumpmässigt ord
console.log(randomWord); // visa vad det slumpmässiga ordet är 
console.log(makeGuess(randomWord, 'e')); // Testar makeGuess med det slumpmässigt valda ordet, randomWord

 ////////////// Ny kod////////////////
 // OBS nedan funkar inte 😒
let inputLetter = document.getElementById('#inputLetter').addEventListener('enter', makeGuess); // Hämtar inputfältet med id och sparar i en variabel.


let  rightLetter = [];
let wrongLetter = [];

//Alice skriver:
//En bra plats att börja kan vara att skapa en eventlyssnare för inputfältet. Denna eventlyssnare skulle kunna triggas när användaren skriver in en bokstav och trycker på enter (eller någon annan händelse du föredrar). 

//När eventet triggas, kan du ta det värde som användaren skrev in, lägga till det i din guessedLetters-array och sedan köra makeGuess-funktionen igen. 

//För att dela upp problemet lite, kan du börja med att skapa eventlyssnaren. Hur skulle du göra det? 🤔





