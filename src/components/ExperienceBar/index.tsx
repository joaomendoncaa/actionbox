import { useContext } from "react";

import ChallengesContext from "../../context/ChallengesContext";

import {
  Container,
  BarWrapper,
  Bar,
  TextWrapper,
  ExpInfoWrapper,
  CurrentExp,
  Slash,
  MaximumExp,
} from "./styles";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel, level } =
    useContext(ChallengesContext);

  const currentLevelPercentage =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <BarWrapper>
        <Bar percentage={currentLevelPercentage} />
      </BarWrapper>
      <TextWrapper>
        <span>LEVEL {level} EXPERIENCE</span>
        <ExpInfoWrapper>
          <CurrentExp>{currentExperience}</CurrentExp>
          <Slash>/</Slash>
          <MaximumExp>{experienceToNextLevel}</MaximumExp>
        </ExpInfoWrapper>
      </TextWrapper>
    </Container>
  );
}
