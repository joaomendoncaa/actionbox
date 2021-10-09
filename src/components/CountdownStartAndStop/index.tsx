import { useContext, useEffect } from "react";

import CountdownContext from "../../context/CountdownContext";

import {
  Container,
  StartButton,
  AbortButton,
  FinishedCycle,
  CheckIcon,
  CloseIcon,
} from "./styles";

export default function CountdownStartAndStop() {
  const { startCountdown, resetCountdown, isActive, hasFinished } =
    useContext(CountdownContext);

  function handleClick(event) {
    const action = event.target.dataset.action;

    switch (action) {
      case "start":
        startCountdown();
        break;
      case "abort":
        resetCountdown();
        break;
    }
  }

  return (
    <Container>
      {hasFinished && (
        <FinishedCycle
          data-action="start"
          onClick={(event) => handleClick(event)}
        >
          cycle finished
          <CheckIcon
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#2CB67D" />
            <path
              d="M16.5777 8.23501L9.79371 15.019L6.96171 12.187C6.81213 12.0374 6.60926 11.9534 6.39771 11.9534C6.18617 11.9534 5.9833 12.0374 5.83371 12.187C5.68413 12.3366 5.6001 12.5395 5.6001 12.751C5.6001 12.8558 5.62073 12.9595 5.66081 13.0562C5.7009 13.153 5.75965 13.2409 5.83371 13.315L9.22571 16.707C9.53771 17.019 10.0417 17.019 10.3537 16.707L17.6977 9.36301C17.7723 9.28817 17.8313 9.19928 17.8712 9.1015C17.9112 9.00372 17.9314 8.89898 17.9307 8.79334C17.93 8.6877 17.9083 8.58326 17.8669 8.48605C17.8255 8.38884 17.7653 8.3008 17.6897 8.22701C17.3937 7.92301 16.8897 7.92301 16.5777 8.23501Z"
              fill="white"
            />
          </CheckIcon>
        </FinishedCycle>
      )}

      {!isActive && !hasFinished && (
        <StartButton
          data-action="start"
          onClick={(event) => handleClick(event)}
        >
          start a cycle
          <img src="images/start.svg" alt="Start icon" />
        </StartButton>
      )}

      {isActive && !hasFinished && (
        <AbortButton
          data-action="abort"
          onClick={(event) => handleClick(event)}
        >
          abandon the cycle
          <CloseIcon />
        </AbortButton>
      )}
    </Container>
  );
}
