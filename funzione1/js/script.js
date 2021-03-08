// Creazione variabili
do {
  var parola = prompt("Inserisci una parola");
} while (parola.trim() == "");
var arr = parola.split("");
var arrRev = [];
var arrJoin = [];
var result = false;

// Definisco la funzione
function palindrome(parola) {
  // Ciclo che scrive all'interno di un array la parola al contrario separata per lettere
  for (var i = 0; i < parola.length; i++) {
    arrRev.push(arr.pop());
  }
  // Unisco le lettere
  arrJoin = arrRev.join("");
  // Controllo se la parola è palindroma
  if (parola == arrJoin) {
    result = "Congratulazione, la parola è palindroma!";
  } else {
    result = "Mi dispiace, la parola non è palindroma."
  }
  return result;
}

alert(palindrome(parola));
