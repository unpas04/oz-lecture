// promise 기본형태
const promise = new Promise((resolve, reject) => {
    console.log("Promise 영역");
    setTimeout(() => {
        console.log("3초 지남!");
        let promiseResult = "작업성공!"; //DB에서 조회한 데이터 API응답
        resolve(promiseResult);
    }, 3000);
});

// promise 실행
promise
    .then((result) => {
        console.log("then 영역");
        console.log(result);
        return `${result} +then1`;
    })
    .then((result) => {
        console.log("then2 영역")
        console.log(result);
    })

// promise.all 병렬처리
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1성공!");
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2성공!");
    }, 2000);
});
promise.all([p1, p2]).then((result) => {
    console.log("모든작업완료");
    console.log(results);
})    
