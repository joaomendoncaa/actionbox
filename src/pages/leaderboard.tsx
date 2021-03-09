import { useState } from "react";

import MenuBar from "../components/MenuBar";
import LeaderboardItem from "../components/LeaderboardItem";

import {
  LeaderboardContainer,
  ContentWrapper,
  LeaderboardHeader,
  LeaderboardHeaderPlaceholder,
  LeaderboardWrapper,
} from "../styles/Leaderboard";

interface LeaderboardDataItem {
  userGithubProfileUrl: string;
  userProfilePictureUrl: string;
  username: string;
  userLevel: number;
  userChallengesCompleted: number;
  userExperience: number;
}

export default function Leaderboard() {
  const [leaderboardDataList, setLeaderboardDataList] = useState<
    LeaderboardDataItem[]
  >([
    {
      userGithubProfileUrl: "https://github.com/joaomendoncaa",
      userProfilePictureUrl:
        "https://avatars.githubusercontent.com/u/57664150?s=460&u=0091dde1b63982f4cb62e4f22597e8548192347c&v=4",
      username: "João Mendonça",
      userLevel: 12,
      userChallengesCompleted: 192,
      userExperience: 19000,
    },
  ]);

  return (
    <LeaderboardContainer>
      <MenuBar />
      <ContentWrapper>
        <LeaderboardHeader>
          <header>
            <h1>Leaderboard</h1>
          </header>
          <main>
            <span>RANK</span>
            <div>
              <span>USER</span>
              <span>LEVEL</span>
              <span>CHALLENGES</span>
              <span>EXPERIENCE</span>
            </div>
          </main>
        </LeaderboardHeader>
        <LeaderboardHeaderPlaceholder />
        <LeaderboardWrapper>
          <LeaderboardItem
            userRank={1}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />
          <LeaderboardItem
            userRank={2}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />
          <LeaderboardItem
            userRank={3}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />
          <LeaderboardItem
            userRank={4}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />
          <LeaderboardItem
            userRank={5}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />
          <LeaderboardItem
            userRank={6}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={7}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={8}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={9}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={10}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={11}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={12}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={13}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={14}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={15}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={16}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />

          <LeaderboardItem
            userRank={17}
            userGithubProfileUrl={leaderboardDataList[0].userGithubProfileUrl}
            userProfilePictureUrl={leaderboardDataList[0].userProfilePictureUrl}
            username={leaderboardDataList[0].username}
            userLevel={leaderboardDataList[0].userLevel}
            userChallengesCompleted={
              leaderboardDataList[0].userChallengesCompleted
            }
            userExperience={leaderboardDataList[0].userExperience}
          />
        </LeaderboardWrapper>
      </ContentWrapper>
    </LeaderboardContainer>
  );
}
