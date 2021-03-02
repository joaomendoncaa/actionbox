import { useContext } from "react";
import Head from "next/head";

import ExperienceBar from "../components/ExperienceBar";
import UserInfo from "../components/UserInfo";
import Countdown from "../components/Countdown";
import CountdownControls from "../components/CountdownControls";
import CountdownStartAndStop from "../components/CountdownStartAndStop";
import ChallengeBox from "../components/ChallengeBox";

import CountdownContext from "../context/CountdownContext";

import {
  Container,
  Main,
  ControlsContainer,
  CountdownWrapper,
  ChallengeBoxContainer,
} from "../styles/Home";

function Home() {
  const { isActive } = useContext(CountdownContext);

  return (
    <Container>
      <Head>
        <title>
          Actionbox | With great discipline comes great achievements
        </title>
      </Head>
      <ExperienceBar />

      <Main>
        <ControlsContainer>
          <UserInfo />

          <CountdownWrapper>
            <Countdown />
            <CountdownControls />
          </CountdownWrapper>

          <CountdownStartAndStop />
        </ControlsContainer>
        <ChallengeBoxContainer>
          <ChallengeBox />
        </ChallengeBoxContainer>
      </Main>
    </Container>
  );
}

export default Home;
