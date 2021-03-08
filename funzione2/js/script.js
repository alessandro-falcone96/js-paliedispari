// Dichiaro le variabili
var scelta = "";
var risultato = "";
var message = "";
var numero = 0;
var somma = 0;
var numeroComputer = 0;

// Chiedo i due input all'utente
do {
  scelta = prompt("Pari o Dispari?");
} while ((scelta != "Pari") && (scelta != "Dispari"));

do {
  numero = parseInt(prompt("Inserisci un numero tra 1 e 5: "));
} while ((numero <= 0) || (numero > 5));

numeroComputer = Math.floor(Math.random() * 5) + 1;
somma = numero + numeroComputer;

// Creo la funzione somma
function isPari(somma) {
  if ((somma % 2) == 0) {
    risultato = "Pari";
  } else {
    risultato = "Dispari";
  }
  return risultato;
}
risultato = isPari(somma);

// Creo la funzione alert message
function alertMessage(risultato) {
  if (risultato == scelta) {
    message = alert("Complimenti, hai vinto!");
  } else {
    message = alert("Mi dispiace, ha vinto il computer!");
  }
  return message;
}

alertMessage(risultato);
console.log(scelta, numero, numeroComputer, somma);
