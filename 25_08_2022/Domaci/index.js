// Suma glavne i sporedne dijagonale kvadratne matrice.

niz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var zbir = 0;
var zbir2 = 0;

for (let i = 0; i < niz.length; i++) {
     for (let j = 0; j < niz[i].length; j++) {
         if(i === j){
             zbir += niz[i][j];
         }
         if(j === (niz.length-1)-i){
            zbir2 += niz[i][j];
         }
     }

}
  console.log(zbir);
  console.log(zbir2);