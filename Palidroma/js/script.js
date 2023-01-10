/*
Palidroma
Inserire parola
Eliminare spazi tra parole
Definire funzione
    Verificare se lettera 1 e lettera n sono uguali
    Verificare se lettera 2 e lettera n-1 sono uguali
    Fino a (parola.lenght)/2
Controllare e stampare risultato
*/

// Inserimento parola
let myWord = prompt("Inserisci una parola:").toLowerCase();

// Rimozione spazi
if (myWord.indexOf(' ') != -1) {
    myWord = myWord.replaceAll(' ', '');
}

// Stampa dati
console.log('Parola:', myWord);
console.log('Lunghezza parola:', myWord.length);
console.log('Numero iterazioni:', Math.ceil((myWord.length)/2));
console.log('---------------');

// Dichiarazione funzione
function paliCheck (word) {

    // Questa variabile conterra' l'indice delle lettere a partire dall'ultimo
    let j;

    for (let i = 0; i < Math.ceil(word.length/2); i++) {

        j = word.length - i -1;

        console.log(`Controllo lettere n.${i+1} e n.${j+1}`);

        if (word[i] != word[j]) {
            console.log(`Esito: lettere non uguali`)
            return false;
        }
        else {
            console.log(`Esito: lettere uguali`)
        }

        console.log('---------------');

    }
    return true;
}

// Controllo e Stampa risultato
if (paliCheck(myWord)) {
    console.log("La parola/frase e' palindroma");
}
else{
    console.log("La parola/frase NON e' palindroma");
}