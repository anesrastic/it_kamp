// const arr4 = [1, 35, 47, 65, 44, 12, 78, 87];

// const arr5 = arr4;

// filter((el) => {
//     return el % 2 === 0;
// });

// map((el) => {
//     return el * 2;
// });

// reduce() metoda se koristi kada zelimo da dobijemo za rezultat samo jednu vrijednost.
// Najcesci primeri za reduce() metodu su kada hocemo da dobijemo sumu.

// const arr6 = [1, 3, 5, 7, 9, 6, 2];

// const suma = arr6.reduce((prevValue, currValue) => {
//     return prevValue + currValue;
// });

// console.log(suma);

// Iz datog niza izdvojiti sve parne brojeve vece od nule. Zatim vratiti sumu elemenata
// koji zadovoljavaju odredjene uslove pomnozenih sa 3.

const arr7 = [-56, -32, 55, 12, 14, 13, 45, 63];

// const result = arr7.filter(sviParni);

// function sviParni(el) {
//         return el > 0 && el % 2 === 0;  
// }

// console.log(result);

const sum2 = arr7.filter((el) => {
    return el > 0 && el % 2 === 0;
})
    .map((el) => el * 3)
    .reduce((prevValue, currVelue) => prevValue + currVelue);


console.log(sum2);

// reduce - 2. primer

const arr8 = [420, 990, 1320, 560, 740, 2090];

const racun = arr8.reduce((prevValue, currVelue) => prevValue + currVelue, 400);

console.log(racun);

// Iz datog niza vratiti sumu elemenata koji 