// user = {
//     lastName: "rastic",
//     password: "sifra1234",
//     location: {
//         adress: "SJ",
//         country: "SRB",

//     }
// };


// word = "abracadabra";

const data = {a: 1, b: 2, c: 3};
const data2= {a: 1, b: 2, c: 3, d: 4};

console.log(Object.entries(data).toString());
console.log(Object.entries(data2).toString());
console.log(Object.keys(data));

console.log(Object.entries(data).toString() === Object.entries(data2).toString());