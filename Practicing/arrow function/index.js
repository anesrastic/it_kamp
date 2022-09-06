// function sum(a, b){
//     return a + b;
// }

// let sum2 = (a, b) => a + b;

// function isPositive(number){
//     return number >= 0;
// }

// let isPositive2 = (number) => number >= 0;

// function randomNumber(){
//     return Math.floor(Math.random() * 50);
// }

// document.addEventListener('click', function(){
//     console.log(randomNumber() + randomNumber());
// })

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();

