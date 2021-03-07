import {
  Container,
  UserRank,
  SubContainer,
  UserInfoWrapper,
  UserLevelWrapper,
  UserLevel,
  LevelBorder,
  LevelValue,
  UserChallengesWrapper,
  UserExperienceWrapper,
} from "./styles";

interface LeaderboardItemProps {
  userRank: number;
  userGithubProfileUrl: string;
  userProfilePictureUrl: string;
  username: string;
  userLevel: number;
  userChallengesCompleted: number;
  userExperience: number;
}

export default function LeaderboardItem({ ...rest }: LeaderboardItemProps) {
  console.log(rest);

  return (
    <Container>
      <UserRank>{rest.userRank}</UserRank>
      <SubContainer>
        <UserInfoWrapper>
          <img
            src={rest.userProfilePictureUrl}
            alt={`${rest.username} Profile Picture`}
          />
          <div>
            <h1>{rest.username}</h1>
            <a target="_blank" href={rest.userGithubProfileUrl}>
              <svg
                width={14}
                height={14}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 0C3.132 0 0 3.132 0 7a6.995 6.995 0 004.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.558-.175-3.185-.779-3.185-3.457 0-.76.271-1.39.717-1.88-.07-.176-.314-.893.07-1.856 0 0 .587-.183 1.925.718a6.495 6.495 0 011.75-.236c.595 0 1.19.078 1.75.236 1.34-.91 1.926-.718 1.926-.718.385.963.14 1.68.07 1.855.446.49.717 1.111.717 1.881 0 2.687-1.636 3.282-3.194 3.457.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.01 7.01 0 0014 7c0-3.868-3.133-7-7-7z"
                />
              </svg>
              <span>github profile</span>
            </a>
          </div>
        </UserInfoWrapper>
        <UserLevelWrapper>
          <UserLevel>
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
            <LevelValue>{rest.userLevel}</LevelValue>
          </UserLevel>
        </UserLevelWrapper>
        <UserChallengesWrapper>
          <p>
            <strong>{rest.userChallengesCompleted}</strong> completed
          </p>
        </UserChallengesWrapper>
        <UserExperienceWrapper>
          <p>
            <strong>{rest.userExperience}</strong> exp
          </p>
        </UserExperienceWrapper>
      </SubContainer>
    </Container>
  );
}
