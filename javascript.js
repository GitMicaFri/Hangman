/* let wordList = ['Krona', 'Bin', 'Vin', 'Bil', 'Vinter'];

// math floor avrundar talet neråt
// math random genererar ett slumpmässigt tal mellan 0-1 (ord, i detta fall), men eftersom vi tar * wordList.length så kommer det bli gånger ordets längd, därmed får vi en siffra mellan 0 till 4, som då är indexpositioneringen
let randomWord = wordList[Math.floor(Math.random() * wordList.length)];

let rightGuesses = [];
let wrongGuesses = []; */

// vi skapar en funktion
// det första vi gör är att splitta ordet till separata siffror
// sedan loopar vi igenom de siffrorna 

/* function theHangman() { 

    // vi skapar en ny variabel, där vi tar randomordet som givits oss tidigare (se ovan), och gör sedan en split på denna nya variabel. detta gör så att randomWord delas upp i olika tecken, som får varsin indexnr
    let splittedWord = randomWord.split(''); 

    // här initierar vi en loop, loopen börjar på index 0 och fortsätter fram tills ordets längd, detta innebär att den går igenom varje bokstav var för sig 
    for (let i = 0; i < splittedWord.length; i++) { 

        // för att få fram specifika bokstäver så skapar vi variabeln letter, där vi söker igenom splitteWord alla olika indexpositionering genom loopen. Så varje gång den loopar så byter den indexpositionering i splitteWord
        let letter = splittedWord[i]; 

        // här börjar vi med våra villkor... så OM användarens gissning, dvs användarens bokstav, inkluderar letter, variabeln som vi ju deklarerade ovan som söker igenom varje bokstav i ordet 
        if (userGuess.includes(letter)) { 

        }
    }
} */

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




