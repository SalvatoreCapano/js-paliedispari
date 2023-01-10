/*
Pari e Dispari

1. Utente sceglie pari o dispari
2. Utente inserisce un numero da 1 a 5 (x)
3. Funzione:
        Generare un numero random tra 1 e 5 per il pc (y)
4. Sommare x e y (z)
5. Funzione:
        Controllare se z e' pari o dispari
6. Stampare il vincitore in base alla scelta dell'utente e del risultato di (5.)
*/

// Scelta pari o dispari
let scelta;
do {

    // Inserimento scelta utente
    scelta = prompt("Scegli pari o dispari:").toLowerCase();

    // Messaggio errore caso scelta non valida
    if (scelta != 'pari' && scelta != 'dispari') {
        console.log ('Inserisci una scelta valida !!!');
    }

} while (scelta != 'pari' && scelta != 'dispari')
console.log ('Hai scelto:', scelta);

// Scelta numero utente
let numeroUtente;
do {

    // Inserimento numero utente
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

    // Messaggio errore caso numero non valido
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        console.log ('Inserisci un numero valido !!!');
    }

} while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5)
console.log ('Hai inserito:', numeroUtente);

// Generazione numero random per pc
const numeroPc = randomNumber(1, 5);
console.log ('Il pc ha inserito:', numeroPc);
