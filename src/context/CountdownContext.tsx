import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

import ChallengesContext from "./ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextProviderProps {
  children: ReactNode;
}

interface CountdownContext {
  countdownTime: number;
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
  changeCountdownTime: (time: number) => void;
  simulateEnding: () => void;
}

const CountdownContext = createContext({} as CountdownContext);

export function CountdownContextProvider({
  children,
}: CountdownContextProviderProps) {
  const { startNewChallenge, resetChallenge } = useContext(ChallengesContext);

  const [countdownTime, setCountdownTime] = useState(25);
  const [time, setTime] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [hasFinished, sethasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function changeCountdownTime(time: number) {
    setCountdownTime(time);
  }

  function startCountdown() {
    setisActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setisActive(false);

    setCountdownTime(25);

    sethasFinished(false);
    resetChallenge();
  }

  function simulateEnding() {
    clearTimeout(countdownTimeout);
    setisActive(false);

    setCountdownTime(0.05);
    setisActive(true);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      sethasFinished(true);
      setisActive(false);
      startNewChallenge();
    } else if (!hasFinished) {
      setTime(countdownTime * 60);
    }
  }, [isActive, time, countdownTime, hasFinished]);

  return (
    <CountdownContext.Provider
      value={{
        countdownTime,
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown,
        changeCountdownTime,
        simulateEnding,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export default CountdownContext;
