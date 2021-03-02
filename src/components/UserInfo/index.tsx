import { useContext } from "react";

import ChallengesContext from "../../context/ChallengesContext";

import {
  Container,
  UserTextWrapper,
  UserLevelWrapper,
  LevelBorder,
  LevelValue,
} from "./styles";

export default function UserInfo() {
  const { challengesCompleted, level } = useContext(ChallengesContext);

  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/57664150?s=460&u=0091dde1b63982f4cb62e4f22597e8548192347c&v=4"
        alt="Profile Picture"
      />
      <UserTextWrapper>
        <h1>João Mendonça</h1>
        <span>{challengesCompleted} challenges completed</span>
      </UserTextWrapper>
      <UserLevelWrapper>
        <svg
          width="45"
          height="57"
          viewBox="0 0 45 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <LevelBorder
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45 14.25L22.5 0L0 14.25V42.75L22.5 57L45 42.75V14.25ZM39.1888 18.0068L22.5 7.42727L5.81125 18.0068V39.1659L22.5 49.7455L39.1888 39.1659V18.0068Z"
          />
        </svg>
        <LevelValue>{level}</LevelValue>
      </UserLevelWrapper>
    </Container>
  );
}
