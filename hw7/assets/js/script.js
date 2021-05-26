function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    // let avg = sum / 3;
    return sum/3;
}

// console.log(averageThreeNumbers(2, 4, 6));

function createSentence(num, noun){
    let sent = "On average, a Berkeley student has " + num + " " + noun + "s.";
    return sent;
}

function getRandomNum(max){
    let abc = Math.floor(Math.random()*max);
    return abc;
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "elephant");

console.log(sentence);