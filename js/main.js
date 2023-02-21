
/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/




//name e surname

const firstName = prompt('Inserisci nome');

console.log( 'La variabile firstName vale: ' + firstName);

const surName = prompt('Inserisci cognome');

console.log( 'La variabile surName vale: ' + surName);

document.getElementById('my-name').innerHTML = 'Mi chiamo ' + firstName + '&nbsp;' + surName;

//colore preferito

const myColor = prompt('Inserisci colore preferito');

console.log( 'La variabile myColor vale: ' + myColor);

document.getElementById('my-color').innerHTML = 'Il mio colore preferito è ' + myColor;

//numero fortunato

const myNumber = prompt('Inserisci numero fortunato');

console.log( 'La variabile myNumber vale: ' + myNumber);

document.getElementById('my-number').innerHTML = 'Il mio numero fortunato è ' + myNumber;


//frase unica:

document.getElementById('dimostrazione-unica').innerHTML = 'Mi chiamo ' + firstName + '&nbsp;' + surName + ' , il mio colore preferito è ' + myColor + ' e il mio numero fortunato è ' + myNumber;