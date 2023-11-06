# theHangman
Gruppexamination: Hänga gubbe

PSEUDOKOD:

Vi ska skapa spelet hänga gubbe. 
I spelet hänga gubbe så ska en användare få gissa en bokstav i taget för att lista ut rätt ord. 
Första steget är att ”samla ingredienserna” till hemsidan. Såsom bilder.
I javascript så skapar vi en array där vi inkluderar de ord som användaren ska få gissa. 
Ex: let wordList = [’Krona’, ’Bin’, ’Vin’, ’Bil’, ’Kanna’]
Skriv en kod som slumpar fram ett av orden i vår wordList, som användaren sedan ska gissa rätt på. Ordets stränglängd ska representeras genom tomma streck, så det blir tydligt för användaren hur många bokstäver ordet är. 
Användaren ges möjligheten att skriva en bokstav. Instrueras att personen har X antal försök kvar. X representerar antal delar på gubben, som vi för enkelhetens skull för tillfället valt till 10.
Programmet ska visa vilken bokstav som valdes.  
Om bokstaven är rätt, då ska bokstaven läggas på rätt plats bland de tomma strecken.
Om bokstaven är fel, då ska bokstaven läggas bort på en annan plats, och så ska den hängda gubben börja ”byggas”. 

Funktioner som bör (kanske?) inkluderas:
•	En funktion för att visa/slumpa ordet. 
•	En funktion för att hantera gissningen (bara en gissning, en bokstav, i taget). 
•	En funktion för att uppdatera gubben (om rätt så händer detta, om fel så händer detta istället). 
•	En funktion för att kontrollera om det är vinst eller förlust. 
•	En ’reset’, så att det börjar om igen. 


HTML / CSS (design på hemsidan):
•	Så lite HTML och CSS som möjligt. Enkel design.
- Knappar (new game, reset, quit?)
- Input. 
- Output.
- Dynamisk bild på The Hangman. 
- Och så lite färg! Kul! 

