import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    color: var(--text-primary);

    div {
        flex: 1;

        position: relative;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background-image: linear-gradient(
            180deg,
            var(--background-secondary) 0%,
            rgba(0,0,0,0) 100%
        );
        box-shadow: 0 0 60px rgba(0,0,0, 0.05);
        border-radius: 5px;
        font-size: 10.625rem;
        text-align: center;

        &:after {
            position: absolute;

            content: '';
            width: 4px;
            height: 100%;

            background: var(--background-main);
            margin: 0 auto;

            z-index: 33;
        }
    }
`

export const Semicolon = styled.span`
    font-size: 9.375rem;
    margin: 0 0.5rem;

    color: var(--background-secondary);
`

export const CountdownNumber = styled.span`
    flex: 1;
`