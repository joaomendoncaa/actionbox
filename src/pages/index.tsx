import { useContext } from "react";
import Head from "next/head";

import { GetServerSideProps } from "next";

import ExperienceBar from "../components/ExperienceBar";
import UserInfo from "../components/UserInfo";
import Countdown from "../components/Countdown";
import CountdownControls from "../components/CountdownControls";
import CountdownStartAndStop from "../components/CountdownStartAndStop";
import ChallengeBox from "../components/ChallengeBox";
import MenuBar from "../components/MenuBar";

import { ChallengesContextProvider } from "../context/ChallengesContext";
import { CountdownContextProvider } from "../context/CountdownContext";

import {
  HomeContainer,
  ContentWrapper,
  Main,
  ControlsContainer,
  CountdownWrapper,
  ChallengeBoxContainer,
} from "../styles/Home";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesContextProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <HomeContainer>
        <MenuBar />
        <ContentWrapper>
          <Head>
            <title>
              Actionbox | With great discipline comes great achievements
            </title>
          </Head>
          <ExperienceBar />

          <CountdownContextProvider>
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
          </CountdownContextProvider>
        </ContentWrapper>
      </HomeContainer>
    </ChallengesContextProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
