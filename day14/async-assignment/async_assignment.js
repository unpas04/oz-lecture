const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

// var, let, const 모두 사용 (과제 요구사항)
const MAX_TIME = 10;
const MIN_TIME = 1;

const resetTimerInput = () => {
    // timerInput 초기화
    timerInput.value = "";
};

const resetTimerDisp = () => {
    // timerDisplay 에러 클래스 초기화 및 내용 지우기
    timerDisplay.classList.remove("error");
    timerDisplay.textContent = "";
};

const showTimerSec = (sec) => {
    resetTimerDisp();
    // timerDisplay에 sec 표시
    timerDisplay.textContent = `타이머: ${sec}초`;
};

const showTimerComplete = () => {
    resetTimerDisp();
    // timerDisplay에 타이머 종료 메세지 표시
    timerDisplay.textContent = "타이머 종료!";
};

const showTimerError = (message) => {
    // timerDisplay에 오류 메세지 표시 및 빨간색 처리
    timerDisplay.textContent = message;
    timerDisplay.classList.add("error");
};

// 함수 선언문으로 타이머 로직 구현
function processTimer(sec) {
    let currentSec = sec;
    showTimerSec(currentSec);

    // 1초마다 반복되는 함수
    var timer = setInterval(() => { // var 사용
        // 1초마다 sec 감소
        currentSec -= 1;

        showTimerSec(currentSec);

        // sec이 0보다 작으면 (즉, 0초가 끝난 직후)
        if (currentSec < 0) {
            clearInterval(timer);
            // 타이머 종료 메세지 표시
            showTimerComplete();
            // 버튼 다시 활성화
            startTimer.disabled = false;
        }
    }, 1000);
}

// 타이머 시작 (클릭 이벤트 리스너)
startTimer.addEventListener('click', function handleClickTimer() {
    try {
        // timer input에서 sec 가져오기 (Number로 변환)
        const timeValue = Number(timerInput.value);

        // 유효성 검사
        if (isNaN(timeValue) || timeValue < MIN_TIME || timeValue > MAX_TIME || timerInput.value.trim() === "") {
            throw new Error("유효한 숫자(1-10)를 입력하세요!");
        }

        // 정상적인 입력일 경우:
        resetTimerDisp();
        startTimer.disabled = true; // 버튼 비활성화
        processTimer(timeValue); // 타이머 실행

    } catch (error) {
        // 오류 메세지 출력
        showTimerError(error.message);
        resetTimerInput();
    }
});
