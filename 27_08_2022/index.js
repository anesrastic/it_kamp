// unos = Number(prompt("Unesi broj: "));

// str = "";

// for (let i = 0; i < unos; i++) {
//     str += "*";
//     console.log(str);
// }



// unos = Number(prompt("Unesi broj: "));

// str = "";

// for (let i = 1; i <= unos; i++) {
//     str += i;
//     console.log(str);
// }

// unos = Number(prompt("Unesi broj: "));

// str = "";

// for (let i = 1; i <= unos; i++) {
//     str = "";
//     for (let j = 0; j < i; j++) {
//         str += i;        
//     }
//     console.log(str);

// }

unos = Number(prompt("Unesi broj: "));

str = "";
zadnji = 0;

for (let i = 1; i <= unos; i++) {
    str = "";
    for (let j = 0; j < i; j++) {
        zadnji++;
        str += zadnji;        
    }
    console.log(str);

}