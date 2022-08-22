// 1) Deklarirajte niz naziva niz i ograničite ga na 10 elemenata. 
// Napunite niz bez unosa preko tastature. Ispišite niz u obrnutom redosledu od 10 prema 1.

// var niz = [];

// var numEls = 10;

// for(let i = 0; i < numEls; i++){
//     niz.push(i+1);
// }

// for(let i = numEls-1; i >= 0; i--){
//     console.log(niz[i]);
// }

// 2) Deklarirajte niz naziva niz i ograničite ga na 10 elemenata. Napunite unosom preko
// tastature. Zbrojite elemente nizova i ispišite njihov zbir.

var niz = [];
var numEls = 10;
var element;
var zbir = 0;

for (let i = 0; i < numEls; i++) {
    element = Number(prompt("Unesite " + (i+1) + " element niza: "));
    niz.push(element);
}

for (let i = 0; i < niz.length; i++) {
    zbir += niz[i];    
}

console.log("Zbir svih elemenata niza je: " + zbir);