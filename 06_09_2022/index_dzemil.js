// ime = prompt("Unesite ime");

// console.log(ime);

// a = parseInt(prompt("unesi 1.stranicu"));
// b = parseInt(prompt("unesi 2.stranicu"));
// c = parseInt(prompt("unesi 3.stranicu"));

// a = 3;
// b = 1;
// c = 5;
// if (a + b > c && a + c > b && b + c > a) {
//   console.log("Trougao je moguc");
// } else {
//   console.log("Nije moguc");
// }

// if (a + b < c) {
//   console.log("trougao nije validan");
// } else if (a + c < b) {
//   console.log("trougao nije validan");
// } else if (b + c < a) {
//   console.log("trougao nije validan");
// } else {
//   console.log("trougao je validan");
// }

// a = 3;
// b = 5;
// c = 5;

// if (a >= b && a >= c) {
//   console.log("a je najvece");
// } else if (b >= a && b >= c) {
//   console.log("b je najvece");
// } else if (c >= a && c >= b) {
//   console.log("c je najvece");
// }

// if (a > b) {
//   if (a > c) {
//     console.log("a je najveci");
//   } else if (c > b) {
//     console.log("c je najveci");
//   }
// } else {
//   if (b > c) {
//     console.log("b je najveci");
//   } else if (c > a) {
//     console.log("c je najveci");
//   }
// }

// broj = 100;

// if (broj % 4 === 0) {
//   console.log("Prestupna");
// } else if (broj % 100 === 0 && broj % 400 === 0) {
//   console.log("Prestupna");
// } else {
//   console.log("Normalna");
// }

// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// p1 = -87;
// p2 = -75;
// p3 = 7000000;

// p = (p1 + p2 + p3) / 3;

// if (p <= 0 || p >= 100) {
//   console.log("Neispravan unos");
// } else if (p < 60) {
//   console.log("F");
// } else if (p < 70) {
//   console.log("D");
// } else if (p < 80) {
//   console.log("C");
// } else if (p < 90) {
//   console.log("B");
// } else if (p < 100) {
//   console.log("A");
// }

// var1 = Number(prompt("uneste rpvi broj:"));

// if (var1 || var1 === 0) {
//   console.log("Broj je", var1);
// } else {
//   console.log("Niste uneli broj");
// }

// switch (6) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Wrong num");
//     break;
// }

// dayNum = 5;
// console.log(dayNum);

// switch (dayNum) {
//   case 2 || 3:
//     console.log("Priv drugidan");
//     break;
//   case 4 || 5:
//     //   case 5:
//     console.log("Soon it is Weekend");
//     break;
//   case 0:
//   case 6:
//     console.log("It is Weekend");
//     break;
//   default:
//     console.log("Looking forward to the Weekend");
// }

// points = 55987;
// switch (true) {
//   case points >= 0 && points < 50:
//     console.log("F");
//     break;

//   case points < 60:
//     console.log("D");
//     break;

//   default:
//     console.log("nesto");
//     break;
// }

// for (let i = 1; i <= 365; i = i + 7) {
//   console.log("Dan broj: ", i, "ponedeljak");
// }

// for (let i = 0; i < 10; i++) {
//   if (i > 6) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("Hello world");
//   }
// }

// broj = 32;

// for (i = 0; i <= broj; i++) {
//   if (broj % i === 0) {
//     console.log(i);
//   }
// }
// sifra = "daris";
// unos = prompt("Unesi sifru");

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// i = 0;
// while (true) {
//   if (i > 10) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// korisnik = "";

// while (korisnik !== "sifra") {
//   korisnik = prompt("Unesite sifru!");
// }

// console.log("Tacna sifra!!!");

// korisnik = "";
// while (true) {
//   if (korisnik === "sifra") {
//     break;
//   }
//   korisnik = prompt("Unesite sifru");
// }

// console.log("TACNO!!");

// broj = undefined;

// while (true) {
//   if (broj === 0) {
//     alert("Izasli ste iz programa");
//     break;
//   } else if (broj === 17) {
//     alert("Dali ste tacan broj!!!");
//     break;
//   }
//   broj = Number(prompt("Unesite broj:"));
// }

// const broj = Math.floor(Math.random() * 100) + 1;

// korisnik = NaN;

// while (korisnik !== broj) {
//   if (korisnik > broj) {
//     alert("Uneseni broj je veci od zadatog");
//   } else if (korisnik < broj) {
//     alert("Uneseni broj je manji od zadatog");
//   }

//   korisnik = Number(prompt("Unesite broj:"));
// }

// alert(`zadati broj je: ${broj}`);
// while (true) {
//   prviBroj = Number(prompt("Unesi prvi broj"));
//   drugiBroj = Number(prompt("Unesi drugi broj"));
//   znak = prompt("Unesi znak");
//   if (znak === "+") {
//     alert(prviBroj + drugiBroj);
//   } else if (znak === "-") {
//     alert(prviBroj - drugiBroj);
//   } else if (znak === "/") {
//     alert(prviBroj / drugiBroj);
//   } else if (znak === "*") {
//     alert(prviBroj * drugiBroj);
//   }
//   // ako unesemo 0 upoerdimo sa string 0 i zaustavimo peljtu
//   if (znak === "0") {
//     alert("izlaz");
//     break;
//   }
// }

// arr = [2, 3, 4, 5, 4, 3, 4, 4, 4, 3, 4, 3];

// auniqArr = [];

// isInside = false;

// for (let i = 0; i < arr.length; i++) {
//   isInside = false;

//   for (let j = 0; j < auniqArr.length; j++) {
//     if (arr[i] === auniqArr[j]) {
//       isInside = true;
//       break;
//     }
//   }

//   if (isInside) {
//     continue;
//   } else {
//     auniqArr.push(arr[i]);
//   }
//   // if (!isInside) {
//   //   auniqArr.push(arr[i]);
//   // }
// }

// // arr = auniqArr
// console.log(auniqArr);

// var1 = [11, false, 1.01, "hello world", null, 10];

// console.log(var1);

// var1.push();

// console.log(var1);

// niz = [];
// // oaiu3298 = []

// numOfEls = 10;

// for (let i = 0; i < numOfEls; i++) {
//   el = prompt("Unesite element:");
//   niz.push(el);
// }

// for (let i = 0; i < niz.length; i++) {
//   console.log(niz[i]);
// }

// niz = [];
// numOfEls = 10;

// for (let i = 0; i < numOfEls; i++) {
//   el = Number(prompt("Unesite element:"));
//   niz.push(el);
// }

// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] % 2 !== 0) {
//     console.log(niz[i]);
//   }
// }

// console.log(niz);

// arr = [23, 34, 45, 46, 56, 67, 7457, 45, 25, 53];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// arr = [23, 34, 45, 46, 56, 67, 7457, 45, 25, 53];

// arr = [];

// for (let i = 0; i < 10; i++) {
//   el = Number(prompt("Unesite ek:"));
//   arr.push(el);
// }

// sumaEl = 0;

// for (let i = 0; i < arr.length; i++) {
//   sumaEl = sumaEl + arr[i];
// }

// console.log(sumaEl);

// // ow48uf02w = [234, 56, 23, false];
// arr = [234, 56, 23, false];

// // arr2 = 2093u928uw
// arr2 = [...arr];

// console.log(arr2);

// arr.push("nova vred");

// arr = [234, 56, 23, false];

// console.log(arr);

// arr.reverse();

// console.log(arr);

// arr = [10, 24, 56];
// console.log(arr);

// arr.unshift();

// console.log(arr);

// maxEl = arr[0];
// secEl = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   let tmpMax = maxEl;
//   if (arr[i] > maxEl) {
//     maxEl = arr[i];
//   }
//   if (arr[i] < tmpMax && arr[i] > secEl) {
//     secEl = arr[i];
//   }
// }

// console.log(maxEl);
// console.log(secEl);

// arr = [123, 1, 324, 213, 2321];

// arr2 = arr;

// console.log(arr2);

// arr[0] = "lalal";
// console.log(arr2);

//sample2.js =====================================
// upon return from bar, myArray2 is not set to null.. why so

// arr = [123, 1, 324, 213, 2321];
// sum = 0;

// arr.forEach((el) => {
//   sum += el;
// });

// console.log(sum);

// arr = [
//   [1, 2, 3], // 0
//   [4, 5, 6, 4, 5, 6], // 1
//   [7], // 2
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j], i, j);
//   }
// }

// arr = [[1, 2, 3], [4, 5, 6, 4, 5, 6], [7]];

// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i][arr[i].length - 1];
// }

// arr = [
//   [1, 2, 3],
//   [4, 2, 6],
//   [7, 8, 9],
// ];

// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] % 2 === 0) {
//         sum += arr[i][j];
//       }
//     }
//   }
// }

// console.log(sum);

// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// 1
//   5
//     9

// suma glavne dijagolne gorenavedeni brojevi

//     3
//   5
// 7
// suma sporedne dijagolne gorenavedeni brojevi

// arr = [12, 32, 5, 32, 21, 21];

// arr.reduce((prev, curr) => {}, 0);

// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th", "st", "nd", "rd"];

// color.forEach((color, i) => {
//   switch (i + 1) {
//     case 1:
//       console.log(`${i + 1}${o[1]} ${color}`);
//       break;
//     case 2:
//       console.log(`${i + 1}${o[2]} ${color}`);
//       break;
//     case 3:
//       console.log(`${i + 1}${o[3]} ${color}`);
//       break;
//     default:
//       console.log(`${i + 1}${o[0]} ${color}`);
//       break;
//   }
// });

// array1 = [1, 0, 2, 3, 34, 2, 323, 4];
// array2 = [3, 5, 6, 7, 8, 13];
// array3 = [];

// if (array1.length > array2.length) {
//   array3 = array1.map((el, i) => {
//     if (array2[i]) {
//       return el + array2[i];
//     } else {
//       return el;
//     }
//   });
// } else {
//   array3 = array2.map((el, i) => {
//     if (array1[i]) {
//       return el + array1[i];
//     } else {
//       return el;
//     }
//   });
// }

// console.log(array3);

arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

// arr = arr.filter((el) => el && el);

arr = arr.filter((el) => {
  if (el) {
    return el;
  }
});

console.log(arr);