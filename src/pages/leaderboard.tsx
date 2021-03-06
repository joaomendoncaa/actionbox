import React from "react";

import MenuBar from "../components/MenuBar";

import {
  LeaderboardContainer,
  MenuWrapper,
  ContentWrapper,
} from "../styles/Leaderboard";

export default function Leaderboard() {
  return (
    <LeaderboardContainer>
      <MenuWrapper>
        <MenuBar />
      </MenuWrapper>
      <ContentWrapper>
        <h1>Leaderboard Content</h1>
      </ContentWrapper>
    </LeaderboardContainer>
  );
}
