import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
//let timer;
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(null); // 定时器
  const dialog = useRef(); // 结果弹窗
  const [timerStarted, setTimerStarted] = useState(false); // 是否开始
  const [timerExpired, setTimerExpired] = useState(false); // 是否超时
  const [timeReaming, setTimeRemaining] = useState(targetTime * 1000); // 剩余时间
  const timerIsActive = timeReaming > 0 && timeReaming < targetTime * 1000;
  if (timeReaming <= 0) {
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    // timer.current = setTimeout(() => {
    //   setTimerExpired(true);
    //   dialog.current.open()
    // }, targetTime * 1000);
    // setTimerStarted(true);

    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1000);
    }, 10);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeReaming}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          Time is running.. / timer inactive
        </p>
      </section>
    </>
  );
}
