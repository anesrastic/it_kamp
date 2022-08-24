// Naći drugi najveći i drugi po veličini element niza.


// const niz = [20, 120, 111, 215, 54, 78, -111, 96, 8, 65, 1000, 1001, 12, 1002, 1003];
// let max = -Infinity, drugiMax = -Infinity;

//   for (let i=0; i<niz.length; i++) {
//     const elNiza = niz[i];

//     if (elNiza > max) {
//         drugiMax = max;
//         max = elNiza;
      
//     } else if (elNiza < max && elNiza > drugiMax) {
//       drugiMax = elNiza; 
//     }
//   }

  
// console.log(drugiMax);


// Deklarirajte niz naziva niz i ograničite ga na 10 elemenata. Napunite unosom preko tastature.
// Kopirajte u drugi niz samo parne elemente prvog niza.

// var niz = [];
// var niz2 = [];
// var brEl = 10;

//  for (let i = 0; i < brEl; i++) {
//     niz.push(Number(prompt("Unesite " + (i+1) + " element niza:")));
// }

// for (let i = 0; i < niz.length; i++) {
//     if((niz[i]%2) === 0){
//         niz2.push(niz[i]);
//     }
    
// }

// console.log(niz);
// console.log(niz2);

//Napunite niz sa 10 elemenata i ispišite najveći i najmanji element niza (MIN/MAX).

var niz = [];
var max = -Infinity;
var min = Infinity;
var brEl = 10;

 for (let i = 0; i < brEl; i++) {
    niz.push(Number(prompt("Unesite " + (i+1) + " element niza:")));
}

for (let i = 0; i < niz.length; i++) {
    
    if(max < niz[i]){
        max = niz[i];
    }

    if(min > niz[i]){
        min = niz[i];
    }
    
}

console.log(niz);
console.log(max);
console.log(min);