// Numero random in un intervallo
function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min) + min);

}

// Controlla se il valore dell'argomento e' un numero pari
function isEven (num) {
    if (num % 2 == 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}