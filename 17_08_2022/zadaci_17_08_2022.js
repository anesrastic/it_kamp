let recenica = "nakon svakog vezbanja je preporuka postaviti promene na github obavezno.";
let recenica2= "";
var brojac = 0;

for (let i = 0; i <recenica.length; i++) {
  if(i === (recenica.length-2)){
    recenica2 += recenica[i].toUpperCase();
  } else if(recenica[i+1] === " ") {
    recenica2 += recenica[i].toUpperCase();
    brojac++;
  } else {
    recenica2 += recenica[i];
  }
  
}

console.log(recenica2);
console.log(brojac)