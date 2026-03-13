function gugudan3() {
    for (let i = 0; i < 10; i++){
       console.log(`3 x ${i} = ${3 * i}`)
    }
}

const gugudan4 = function () {
    for (let i = 0; i < 10; i++){
       console.log(`4 x ${i} = ${4 * i}`)
    }
}

const gugudan5 = () => {
    for (let i = 0; i < 10; i++){
       console.log(`5 x ${i} = ${5 * i}`)
    }
}

// return이 void()임 = 반환값이 없다
function gugudan(num) {
    for (let i = 0; i < 10; i++){
       console.log(`${num} x ${i} = ${num * i}`)
    }
}



// gugudan3()
// gugudan4()
// gugudan5()
// gugudan(5);



const sum = function(a,b) {
    console.log(a);
    console.log(b);
    return a + b;
}

const result = sum(4,32);
console.log(result);


// const sumScore = (math, english, music, science) => {
//     return math + english + music + science;
// }

// const svgScore = (math, english, music, science) => {
//     return sumScore(math,english,music,science) / 4;
// }


// let math = 70;
// let engliush = 80;
// let music = 40;
// let science = 100;

// const scores = [70, 80, 40, 100]
// const total = sumScore(math, english, music, science);
// const avg = avgScore(math, english, music, science);


const sumScore = (math, english, music, science) => {
    return math + english + music + science;
}

const svgScore = (math, english, music, science) => {
    return sumScore(math,english,music,science) / 4;
}


let math = 70;
let engliush = 80;
let music = 40;
let science = 100;

const scores = [70, 80, 40, 100]
const total = sumScore(scores);
const avg = avgScore(scores);