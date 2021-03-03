import styled from 'styled-components'

export const Overlay = styled.div`
    background: rgba(22, 22, 26, 0.9625);
    position: fixed;
    z-index: 300;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;


    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1250px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    position: relative;

    strong {
        font-size: 4rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 3rem 0 1rem 0;
    }

    p {
        font-size: 1.1rem;
        font-weight: 400;
        max-width: 500px;
        color: var(--text-secondary);
        margin-bottom: 7.5rem;
    }
`

export const UserLevelWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LevelBorder = styled.path`
    fill: var(--background-secondary);
`

export const LevelValue = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 12rem;

    position: absolute;
    z-index: 500;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;

    opacity: 0;

    animation: appear 0.25s 2s ease-in-out forwards;

    @keyframes appear {
        from {
            opacity: 0;
            transform: scale(.75);
        }
        50% {
            opacity: .8;
            transform: scale(1.25);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`

export const CloseModalButton = styled.button`
    position: absolute;
    right: 0;
    top: 3rem;

    background: none;
    border: 0;

    outline: none;
`

export const ControlsWrapper = styled.div`
    display: flex;
`

export const TwitterShareButton = styled.button`
    padding: 0.5rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: var(--twitter-blue);

    border: 0;
    border-radius: 5px;

    outline: 0;

    font-weight: 600;

    pointer-events: none;
    opacity: 0;

    animation: show-up .25s 2.5s ease-in forwards;

    @keyframes show-up {
        from {
            pointer-events: none;
            opacity: 0;
        }
        to {
            pointer-events: all;
            opacity: 1;
        }
    }

    img {
        margin-left: .5rem;
        width: 16px;
        height: 16px;
    }

    transition: .1s ease-in-out;

    &:hover {
        background: var(--twitter-blue-dark);
    }
`

export const ContinueButton = styled.button`
    margin-left: 1rem;
    padding: 1rem 4rem;

    background: var(--green-dark);

    border: 0;
    border-radius: 5px;

    outline: 0;

    font-weight: 600;

    transition: .1s ease-in-out;

    pointer-events: none;
    opacity: 0;

    animation: show-up .25s 2.75s ease-in forwards;

    @keyframes show-up {
        from {
            pointer-events: none;
            opacity: 0;
        }
        to {
            pointer-events: all;
            opacity: 1;
        }
    }

    &:hover {
        background: var(--button-hover-green);
    }
`
