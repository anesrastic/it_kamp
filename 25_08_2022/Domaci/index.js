// Suma glavne i sporedne dijagonale kvadratne matrice.

niz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var zbir = 0;
var zbir2 = 0;
var ispis = "";
var ispis2 = "";


for (let i = 0; i < niz.length; i++) {
    ispis = "";
    for (let j = 0; j < niz[i].length; j++) {
        if (i === j) {
            ispis += niz[i][j];
        }
        else {
            ispis += "   ";
        }
    }
    console.log(ispis);
}

for (let i = 0; i < niz.length; i++) {
    ispis2 = "";
    for (let j = 0; j < niz[i].length; j++) {
        if (j === (niz.length - 1) - i) {
            ispis2 += niz[i][j];
        }
        else {
            ispis2 += "   ";
        }
    }
    console.log(ispis2);
}

for (let i = 0; i < niz.length; i++) {
    for (let j = 0; j < niz[i].length; j++) {
        if (i === j) {
            zbir += niz[i][j];
        }
        if (j === (niz.length - 1) - i) {
            zbir2 += niz[i][j];
        }
    }

}
console.log(zbir);
console.log(zbir2);