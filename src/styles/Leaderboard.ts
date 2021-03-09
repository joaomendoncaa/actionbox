import styled from 'styled-components'


export const LeaderboardContainer = styled.div`
    display: flex;
`

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1250px;

    margin: 0 auto;
    padding: 0 0 2rem 0;

    display: flex;
    flex-direction: column;
`

export const LeaderboardHeader = styled.div`
    position: fixed;
    z-index: 300;

    width: 100%;
    max-width: 1250px;

    background: var(--background-main);

    header {
        padding: 5rem 0;

        h1 {
            font-size: 4rem;
            font-weight: 600;
        }
    }

    //this section width values mimic the width values of the LeaderboardItem Component
    main {
        width: 100%;

        display: flex;
        justify-content: space-between;

        margin-bottom: 2rem;

        //the first span of main
        > span {
            color: var(--text-secondary);
            font-weight: 600;
            width: 10%;
        }

        > div {
            padding: 0 1rem;
            width: 90%;
            display: flex;
            color: var(--text-secondary);
            font-weight: 600;

            > span:nth-child(1) {
                width: 40%;
            }

            > span:nth-child(2) {
                width: 20%;
            }

            > span:nth-child(3) {
                width: 20%;
            }

            > span:nth-child(4) {
                width: 20%;
            }
        }
    }
`

export const LeaderboardHeaderPlaceholder = styled.div`
    height: 20rem;
    width: 100%;
`

export const LeaderboardWrapper = styled.div`
    width: 100%;
`

