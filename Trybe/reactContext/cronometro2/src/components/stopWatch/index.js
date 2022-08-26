import React, {useState} from "react";
import "./style.css";
import Timer from "../timer";
import ControlButtons from "../controlButtons";
import RandomNumber from "../randomNumber.js";

export default function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [dismount, setDismount] = useState(true);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const caughtDismountStop = (param) => {
    // setDismount(param);
  }
  
  return (
    dismount && <div>
      <div className="stop-watch">
        <Timer time={time} />
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
          />
      </div>
      <RandomNumber timer={ time } caughtDismountStop={caughtDismountStop} />
    </div>
  );
}