import styled from 'styled-components'

export const Container = styled.div`

`

export const StartButton = styled.button`
    padding: 1.75rem 0;
    border: 0;
    border-radius: 5px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: var(--text-primary);

    background: var(--green-dark);

    transition: .1s ease-out;

    img {
        width: 1rem;
        height: 1rem;
        margin-left: 1rem;
    }

    &:hover {
        background: var(--button-hover-green);
    }
`

export const AbortButton = styled.button`
    padding: 1.75rem 0;
    border: 0;
    border-radius: 5px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: var(--text-secondary);

    background: var(--background-secondary);

    transition: .1s ease-out;

    img {
        width: .8rem;
        height: .8rem;
        margin-left: 1rem;
    }

    &:hover {
        color: var(--text-primary);
        background: var(--button-hover-red);
    }
`

export const FinishedCycle = styled.div`
    padding: 1.75rem 0;
    border: 0;
    border-radius: 5px;
    width: 100%;

    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: var(--text-primary);

    background: var(--background-secondary);

    &:after {
        height: 4px;
        width: 0%;

        content: '';

        background: var(--green-dark);
        position: absolute;
        z-index: 3;
        bottom: 0;
        left: 0;

        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        animation: fill .3s ease-out forwards;

        @keyframes fill {
            100% {
                width: 100%;
            }
        }
    }
`

export const CheckIcon = styled.svg`
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 1rem;


    transform-origin: 50% 50%;
    
    animation: pop-in-small .3s ease-out forwards;

    path {
        transform-origin: 50% 50%;

        animation: pop-in-big .3s .15s ease-out forwards;
    }

    @keyframes pop-in-big {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.75);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes pop-in-small {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }
`