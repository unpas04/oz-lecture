const STAR = "*";

const genPromptInput = () => {
    let input;
    let isNotValid = true;
    while (isNotValid) {
        let inputStr = prompt("출력할 별 갯수를 입력해주세요.")
        input = Number(inputStr);
        if(isNaN(10<input)) {
            console.log("오류");
            continue;
        }
        isNotValid = false;
    }
    return input;
}




// 정의

const maxStars = 10;
let input;
var stars = "";

function printStars(count = 1) {
    stars = "";

    for (let i = 0; i < count; i++) {
        stars += "*";
    }

    console.log(stars);
}


// 실행

while (true) {

    input = Number(prompt("Enter the number of stars (1-10):"));

    if (isNaN(input) || input < 1 || input > maxStars) {
        console.log("Invalid input! Enter a number between 1 and 10.");
        continue;
    }

    printStars(input);
    break;
}