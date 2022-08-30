// unos = 10;

// zvezdica = "*";

// for (let i = 0; i < unos; i++) {
//     razmak = "";

//     for (let j = i; j < unos - 1; j++) {
//         razmak += " ";        
//     }

//     console.log(razmak + zvezdica);
//     zvezdica += " *";
// }

rec = "Hello World";

console.log(rec.toUpperCase());
console.log(rec.toLowerCase());
console.log(rec.split(""));
console.log(rec.includes("orld"));
console.log(rec.startsWith("He"));
console.log(rec.slice(1, 9));

console.log(rec.indexOf("l"));
console.log(rec.concat("Anes"));

console.log(rec.trim());
a = rec.replace("World", "Anes");
console.log(a);
console.log(rec);
