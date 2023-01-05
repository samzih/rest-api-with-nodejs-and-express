# REST-API i Node.js med Express

### Länk till GitHub repo: https://github.com/samzih/rest-api-with-nodejs-and-express

### Beskrivning av projektet:
Denna applikation hanterar en JSON-fil (istället för en riktig databas) med diverse information om ett utbud olika Counter-Strike spelare. Applikationen har en backend API som kan testas och användas med hjälp av den inkluderande .rest-filen (installera REST-Client tillägget för VS Code). De HTTP anrop som skickas med rest-filen kommer nå olika routes som därerfter kan återge, lägga till, uppdatera samt ta bort data från JSON-filen.

### Krav som är uppfyllda:
***Jag har uppfyllt följande krav för godkänt***
- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest | .http)
- [x] All data skall vara sparad i en JSON-fil
- [x] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [x] APIét ska svara med 404 om datan saknas
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (titel, beskrivning av projektet, uppfyllda krav samt hur projektet byggs och körs)
- [x] Uppgiften lämnas in i tid!

### Hur projektet har byggts och körs:
Applikationen har byggts med Node.js och Express.

För att sätta igång och testköra applikationen via rest-filen så måste du:
1. Installera alla dess dependencies med `npm install` i VS Code terminalen
2. Starta servern med `node app.js` i terminalen
3. Öppna _testing.rest_ för att testa de olika endpoints som finns (kom ihåg att ha REST-Client tillägget installerat)
