import { useState, useContext, useEffect, useRef } from "react";

import ContdownContext from "../../context/CountdownContext";

import { Container, Button, Placeholder } from "./styles";

export default function CountdownControls() {
  const container = useRef<HTMLDivElement>();
  const {
    changeCountdownTime,
    countdownTime,
    isActive,
    hasFinished,
  } = useContext(ContdownContext);
  const [countdownTimeSelected, setCountdownTimeSelected] = useState(25);

  function handleClick(event) {
    const time = event.target.dataset.time;
    changeCountdownTime(time);
  }

  return (
    <Container ref={container}>
      {!isActive && !hasFinished ? (
        <>
          <Button
            data-time={25}
            opacity={countdownTime == 25 ? "1" : "0.25"}
            active={countdownTime == 25 ? true : false}
            onClick={(event) => handleClick(event)}
          >
            25:00
          </Button>
          <Button
            data-time={30}
            opacity={countdownTime == 30 ? "1" : "0.25"}
            active={countdownTime == 30 ? true : false}
            onClick={(event) => handleClick(event)}
          >
            30:00
          </Button>
          <Button
            data-time={45}
            opacity={countdownTime == 45 ? "1" : "0.25"}
            active={countdownTime == 45 ? true : false}
            onClick={(event) => handleClick(event)}
          >
            45:00
          </Button>
          <Button
            data-time={90}
            opacity={countdownTime == 90 ? "1" : "0.25"}
            active={countdownTime == 90 ? true : false}
            onClick={(event) => handleClick(event)}
          >
            90:00
          </Button>
        </>
      ) : (
        <Placeholder
          height={container.current.getBoundingClientRect().height}
        />
      )}
    </Container>
  );
}
