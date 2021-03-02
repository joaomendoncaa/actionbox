import { useContext, useEffect } from "react";

import CountdownContext from "../../context/CountdownContext";

import { Container, Semicolon, CountdownNumber } from "./styles";

export default function Countdown() {
  const { minutes, seconds, hasFinished, simulateEnding } = useContext(
    CountdownContext
  );

  const [minutesFirstPosition, minutesSecondPosition] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondsFirstPosition, secondsSecondPosition] = String(seconds)
    .padStart(2, "0")
    .split("");

  useEffect(() => {
    window.addEventListener("keypress", (event) => {
      if (event.key == "O" && event.shiftKey) {
        simulateEnding();
      }
    });
  }, []);

  return (
    <Container>
      <div>
        <CountdownNumber>{minutesFirstPosition}</CountdownNumber>
        <CountdownNumber>{minutesSecondPosition}</CountdownNumber>
      </div>
      <Semicolon>:</Semicolon>
      <div>
        <CountdownNumber>{secondsFirstPosition}</CountdownNumber>
        <CountdownNumber>{secondsSecondPosition}</CountdownNumber>
      </div>
    </Container>
  );
}
