import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background: var(--background-secondary);

    border-radius: 5px;
`

export const StartCycleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem 4rem;

    height: 100%;
    width: 100%;

    h1 {
        font-size: 1.875rem;
        font-weight: 600;
        text-align: center;
    }

    img {
        margin: 2rem 0;
    }

    p {
        text-align: center;
        color: var(--text-secondary);
    }
`
export const ActiveCycleContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem 4rem;

    h1 {
        font-size: 1.875rem;
        font-weight: 600;
        text-align: center;
    }

    p {
        text-align: center;
        color: var(--text-secondary);
    }

`

export const IllustrationWrapper = styled.div`
    overflow: hidden;
    margin: 2rem 0;
    position: relative;

    width: 22.587890625rem;
    height: 17.54296875rem;
`

export const IllustrationSvg = styled.svg`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    width: 200%;
    height: 200%;
`

export const FirstLayer = styled.g`
    animation: slide 15s linear infinite;

    @keyframes slide {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(50%);
        }
    }

    path {
        fill: #fff;
    }
`

export const SecondLayer = styled.g`
    animation: slide 5s linear infinite;

    filter: blur(.1px);

    @keyframes slide {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(50%);
        }
    }
`

export const ThirdLayer = styled.g`
    animation: slide 3s linear infinite;

    filter: blur(.5px);

    @keyframes slide {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(50%);
        }
    }
`

export const FourthLayer = styled.g`
    animation: slide 1s linear infinite;

    filter: blur(1px);

    @keyframes slide {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(50%);
        }
    }
`

export const Human = styled.g`
    animation: flying 10s ease-in-out infinite;

    transform-origin: center;

    @keyframes flying {
        from {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(-7px, 6px);
        }
        50% {
            transform: translate(2px, -5px);
        }
        75% {
            transform: translate(5px, -3px);
        }
        to {
            transform: translate(0, 0);
        }
    }
`


export const FinishedCycleContainer = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 6rem;

    header {
        width: 100%;

        font-size: 1.4375rem;
        font-weight: 600;
        color: var(--text-primary);
        text-align: center;

        padding-bottom: 1.5rem;

        border-bottom: 2px solid var(--separator);

        span {
            color: var(--green-dark);
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: 2.125rem;
            margin: 2rem 0 1rem 0;
            font-weight: 600;
            color: var(--text-primary);
        }

        p {
            color: var(--text-secondary);
            text-align: center;
        }
    }

    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;
    }
`

export const FailedButton = styled.button`
    width: 47.5%;
    padding: 1rem 1.25rem;

    border-radius: 5px;
    border: 0;

    outline: none;

    font-size: 1rem;

    background: var(--button-grey);

    transition: .05s ease-in-out;

    &:hover {
        background: var(--button-hover-red);
    }
`

export const CompletedButton = styled.button`
    width: 47.5%; 
    padding: 1rem 1.25rem;

    border-radius: 5px;
    border: 0;

    outline: none;

    font-size: 1rem;

    background: var(--green-dark);

    transition: .05s ease-in-out;

    &:hover {
        background: var(--button-hover-green);
    }
`