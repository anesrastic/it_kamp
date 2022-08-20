var niz = [];
var numEl = 10;

for(let i=0; i<numEl; i++){
    el = Number(prompt("Unesite element niza: "))
  niz.push(el);
}

for(let i=0; i<niz.length; i++){
    if(niz[i]%2 === 0){
        console.log(niz[i]);
    }
}

console.log(niz)