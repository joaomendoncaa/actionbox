import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 2rem;
`

export const UserRank = styled.span`
    font-size: 1.875rem;
    font-weight: 600;
    width: 10%;
`

export const SubContainer = styled.div`
    display: flex;
    align-items: center;

    width: 90%;

    background: var(--background-secondary);
    border-radius: 10px;

    padding: 1rem;
`

export const UserInfoWrapper = styled.div`
    width: 40%;

    display: flex;
    align-items: center;

    img {
        width: 4.5rem;
        height: 4.5rem;

        margin-right: .5rem;
    }

    div {
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 1.3125rem;
            font-weight: 500;
            margin-bottom: .25rem;
        }

        a {
            outline: none;
            display: flex;
            align-items: center;

            svg {
                margin-right: .5rem;
            }

            path {
                fill: var(--text-secondary);
            }

            span {
                color: var(--text-secondary);
            }

            &:hover {
                path {
                    fill: var(--green-dark);
                }

                span {
                    color: var(--green-dark);
                }
            }
        }
    }
`

export const UserLevelWrapper = styled.div`
    width: 20%;
`

export const UserLevel = styled.div`
    position: relative;
    display: flex;
    width: min-content;
`

export const LevelBorder = styled.path`
    fill: var(--text-secondary);
    opacity: .2;
`

export const LevelValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 900;
    font-size: 1.3125rem;

    position: absolute;
    z-index: 1;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
`

export const UserChallengesWrapper = styled.div`
    width: 20%;

    color: var(--text-secondary);

    strong {
        font-weight: 600;
        color: var(--green-dark);
    }
`

export const UserExperienceWrapper = styled.div`
    width: 20%;
    color: var(--text-secondary);

    strong {
        font-weight: 600;
        color: var(--green-dark);
    }
`
