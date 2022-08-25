// var niz = [123, 1, 25, 56, 12];

// niz.forEach((el) => {
//      console.log(el);
// })

// niz = [
//     [1, 2, 3, 5, 12],
//     [4, 5, 6, 4, 5, 6],
//     [7]
// ];
// var zbir = 0;

// for (let i = 0; i < niz.length; i++) {
//     for (let j = 0; j < niz[i].length; j++) {
//         if(j === niz[i].length-1){
//             zbir += niz[i][j];
//         }
//     }

// }

// console.log(zbir);

niz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
];
var zbir = 0;

for (let i = 0; i < niz.length; i++) {
     for (let j = 0; j < niz[i].length; j++) {
         if(i%2 !== 0 && niz[i][j]%2 ===0){
             zbir += niz[i][j];
         }
     }

 }

 console.log(zbir);

 // Suma glavne i sporedne dijagonale kvadratne matrice.