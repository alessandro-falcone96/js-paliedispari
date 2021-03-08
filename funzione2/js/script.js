// Dichiaro le variabili
do {
  var scelta = prompt("Pari o Dispari?");
} while ((scelta != "Pari") && (scelta != "Dispari"));

do {
  var numero = parseInt(prompt("Inserisci un numero tra 1 e 5: "));
} while ((numero <= 0) || (numero > 5));

var numeroComputer = Math.floor(Math.random() * 5) + 1;
var somma = numero + numeroComputer;

// Creo la funzione somma
function isPari(somma) {
  if ((somma % 2) == 0) {
    var risultato = "Pari";
  } else {
    var risultato = "Dispari";
  }
  return risultato;
}
var risultato = isPari(somma);

// Creo la funzione alert message
function alertMessage(risultato) {
  if (risultato == scelta) {
    var message = alert("Complimenti, hai vinto!");
  } else {
    var message = alert("Mi dispiace, ha vinto il computer!");
  }
  return message;
}

alertMessage(risultato);
console.log(scelta, numero, numeroComputer, somma);
