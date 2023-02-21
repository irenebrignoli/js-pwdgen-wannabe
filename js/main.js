
/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23*/

//name

const firstName = prompt('Inserisci nome');

console.log( 'La variabile firstName vale: ' + firstName);

//surname

const surName = prompt('Inserisci cognome');

console.log( 'La variabile surName vale: ' + surName);

//colore preferito

const myColor = prompt('Inserisci colore preferito');

console.log( 'La variabile myColor vale: ' + myColor);

//numero fortunato

const myNumber = prompt('Inserisci numero fortunato');

console.log( 'La variabile myNumber vale: ' + myNumber);

document.getElementById('nome').innerHTML = 'Mi chiamo ' + firstName + '&nbsp;' + surName + ' , il mio colore preferito è ' + myColor + ' e il mio numero fortunato è ' + myNumber;