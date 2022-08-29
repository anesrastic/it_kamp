// unos = Number(prompt("Unesi broj: "));

// str = "";
// str2 = "";
// zadnji = 0;

// for (let i = 0; i < unos; i++) {
    
//    for (let j = 0; j < unos-i; j++) str += " ";
//    for (let k = 0; k <= i; k++) {
//     zadnji++;
//     str2 += (zadnji + " ");
//    }

//    console.log(str + str2);
//    str = "";
//    str2 = "";
// }


// unos = Number(prompt("Unesi broj: "));

// str = "";
// str2 = "";

// for (let i = 0; i < unos; i++) {
    
//    for (let j = 0; j < unos-i; j++) str += " ";
//    for (let k = 0; k <= i; k++) {
//     str2 += ("*" + " ");
//    }

//    console.log(str + str2);
//    str = "";
//    str2 = "";
// }

unos = Number(prompt("Unesi broj: "));

temp = [];
str = "";

for (let i = 0; i < unos; i++) {    
   if(i % 2 === 0){
    temp.unshift(1);
   } else {
    temp.unshift(0);
   }

   str = temp.join(" ");
   console.log(str);
   str = "";

}

