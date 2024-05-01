import TimeCountBox from "./TimeCountBox";
import { useRef, useState, useEffect } from "react";

const TimeDownCount = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  function startTimer() {
    const countDownDate = new Date("May 31, 2024 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days < 10 ? "0" + days : days.toString());
        setTimerHours(hours < 10 ? "0" + hours : hours.toString());
        setTimerMinutes(minutes < 10 ? "0" + minutes : minutes.toString());
        setTimerSeconds(seconds < 10 ? "0" + seconds : seconds.toString());
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }); // Empty dependency array to run only once

  return (
    <div className="flex items-center gap-x-3">
      <TimeCountBox timeDownItem={timerDays}>Days</TimeCountBox>
      <TimeCountBox timeDownItem={timerHours}>Hours</TimeCountBox>
      <TimeCountBox timeDownItem={timerMinutes}>Minutes</TimeCountBox>
      <TimeCountBox timeDownItem={timerSeconds}>Seconds</TimeCountBox>
    </div>
  );
};

export default TimeDownCount;
