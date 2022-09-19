// x = '45385593107843568';


// function fakeBin(x) {
//     arr = Array.from(x);

//     res = arr.map((el) => {
//         if (el >= 5) {
//             return "1";
//         } else {
//             return "0";
//         }
//     });
//     return res;
// }

// console.log(fakeBin(x));

// str = "This is an example!"

// function reverseWords(str) {

//     arr = str.split(" ");
//     arr2 = [];

//     arr.forEach(el => {

//     });
// }

// arr1 = [1, 2, 3, 4, 5, 6];


//  function dvisibleBy(arr1, n) {
//     return arr1.filter((el) => el % 2 === 0);
// }

// console.log(dvisibleBy(arr1,2));


//  function boolToWOrd(bool) {
//     if(bool){
//         return "Yes";
//     } else{
//         return "No";
//     }
// }

// console.log(boolToWOrd(false));

// arr = ["Anes", "Rastic"];

// arr[0].reverse();

// console.log(arr);

// arr = [1, 4, 3, 2, 1, 2, 3, 2, 2, 2];

// function stantonMeasure(arr) {
//     counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === 1){
//             counter += 1;
//         }
//     }

//     counter2 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === counter){
//             counter2 += 1;
//         }        
//     }

//     return counter2;
// }

// function stantonMeasure(arr) {
//     return arr.filter(el => el === (arr.filter(e => e === 1).length)).length
// }

// console.log(arr.filter(e => e === 1));

// a = 153;

// function narcissistic(a) {
//     b = a.toString();
//     pow = b.length;
//     rez = 0;
//     for (let i = 0; i < pow; i++) {
//         rez += Math.pow(Number(b[i]), pow);
//     }

//     return rez === a;
// }

// console.log(narcissistic(a));

// text = "The sunset sets at twelve o' clock.";

// function alphabetPosition(text) {

//     rez = "";
//     for (let i = 0; i < text.length; i++) {
//         str = "";
//         if(text[i].charCodeAt(0) < 64 && text[i].charCodeAt(0) > 122) {
//             continue;
//         } else if(text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122) {
//             str = (text[i].charCodeAt(0) - 96);
//             rez += str + " ";
//         } else if(text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) {
//             str = (text[i].charCodeAt(0) - 64);
//             rez += str + " ";
//         }        
//     }
//     rez2 = "";

//     for (let i = 0; i < rez.length - 1; i++) {
//         rez2 += rez[i];        
//     }

//     return rez2;
// }

// console.log(alphabetPosition(text));

// a = 999;

// function persistence(a) {

//     count = 0;
//     while (Math.round(a / 10) > 0) {
//         myArr = String(a).split("").map((a) => {
//             return Number(a)
//         });
//         a = 1;
//         for (let i = 0; i < myArr.length; i++) {
//             a *= myArr[i];
//         }
//         count++;
//     }

//     return count;
// }



// a = 395;

// var myArr = String(a).split("").map((a) => {
//     return Number(a)
// });

// num = myArr.reduce((prev, curr) => {
//     return prev * curr;
// });

// num = 39;

// function persistence(num) {
//     var times = 0;

//     num = num.toString();

//     while (num.length > 1) {
//         times++;
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }

//     return times;
// }

// console.log(persistence(num));

// s1 = "test";

// s2 = "testing";

// s3 = "A";

// function getMiddle(s) {
//     char = "";
//     if(s.length % 2) {
//         char = s[Math.floor(s.length/2)];
//     }else {
//         char = s[(s.length/2)-1] + s[s.length/2];
//     }

//     return char;
// }

// console.log(getMiddle(s3));

// arr = ['a','b','c','d','f'];

// function findMissingLetter(arr) {

//     first = arr[0].charCodeAt(0);
//     last = arr[arr.length - 1].charCodeAt(0);
//     a = arr.map(el => {
//         return el.charCodeAt(0);
//     });
//     b = [];
//     for (i = first; i <= last; i++) {
//         b.push(i);
//     }




//     return b;
// }

// function findMissingLetter(arr) {

//     first = arr[0].charCodeAt(0);
//     last = arr[arr.length - 1].charCodeAt(0);
//     a = arr.map(el => {
//         return el.charCodeAt(0);
//     });
//     b = [];
//     for (i = first; i <= last; i++) {
//         b.push(i);
//     }

//     rez = "";
//     for (let i = 0; i < b.length; i++) {
//         if(a[i] !== b[i]){
//             rez = String.fromCharCode(b[i]);
//             break;
//         }

//     }
//     return rez;
// }




// console.log(findMissingLetter(arr));

str = 'yearComeCaseOwn';

function solution(str) {
    a = str.split("");

    asci = a.map((el) => {
        return el.charCodeAt(0);
    });
    console.log(asci);

    b = asci.filter((el) => {
        return el >= 65 && el <= 90;
    });
    console.log(b);
    c = b.map((el) => {
        return String.fromCharCode(el);
    });

    d = c.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }


    console.log(d);
    final = "";

    for (let i = 0; i < d.length; i++) {
        rez = "";
        for (let j = 0; j < str.length; j++) {
            if(d[i] === str[j]){
                rez += " " + str[j];
            } else {
                rez += str[j];
            }
        }
        final += rez;
    }

    return final;
}


console.log(solution(str));