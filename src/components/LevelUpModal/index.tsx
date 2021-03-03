import { useContext, useState, useEffect } from "react";

import ChallengesContext from "../../context/ChallengesContext";

import {
  Overlay,
  Container,
  UserLevelWrapper,
  LevelBorder,
  LevelValue,
  CloseModalButton,
  ControlsWrapper,
  TwitterShareButton,
  ContinueButton,
} from "./styles";

export default function LevelUpModal() {
  const { level, closeModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <CloseModalButton type="button" onClick={closeModal}>
          <img src="/images/close.svg" alt="Close Icon" />
        </CloseModalButton>

        <UserLevelWrapper>
          <svg
            width={232}
            height={294}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <LevelBorder
              fillRule="evenodd"
              clipRule="evenodd"
              d="M232 73.467L116 0 0 73.467V220.4l116 73.467L232 220.4V73.467zm-29.96 19.368L116 38.292 29.96 92.835v109.087L116 256.465l86.04-54.543V92.835z"
              fill="#1E1E23"
            />
          </svg>
          <LevelValue>{level}</LevelValue>
        </UserLevelWrapper>
        <strong>Level Up</strong>
        <p>
          Congratulations for your dedication, you reached a higher level, keep
          on going!
        </p>

        <ControlsWrapper>
          <TwitterShareButton type="button">
            share
            <img src="/images/twitter.svg" alt="Twitter icon" />
          </TwitterShareButton>
          <ContinueButton type="button" onClick={closeModal}>
            continue my journey
          </ContinueButton>
        </ControlsWrapper>
      </Container>
    </Overlay>
  );
}
