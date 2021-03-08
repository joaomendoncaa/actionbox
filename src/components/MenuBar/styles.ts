import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    /* background: var(--background-secondary); */
    background-image: linear-gradient(
        180deg,
        var(--background-secondary) 0%,
        var(--background-main) 100%
    );
    height: 100%;

    padding: 2rem 0;
`

export const Logo = styled.img`
    width: calc(5.9375rem * 1.25);
    height: calc(1.380625rem * 1.25);

    margin: 0 2rem 6rem 2rem;
`

export const MenuArea = styled.div`

`

interface MenuButtonProps {
    isSelected: boolean
}

export const MenuButton = styled.a<MenuButtonProps>`
    cursor: pointer;
    border: 0;
    background: transparent;

    display: flex;
    align-items: center;

    padding: 0.25rem 4rem 0 2rem;
    margin: 1rem 0;

    transition: .05s ease-in;

    position: relative;

    svg {
        margin: 0 1rem 0 0;
    }

    path { 
        transition: .05s linear;
        fill: var(--text-primary);
    }

    span { 
        transition: .05s linear;
        color: var(--text-primary);
        font-size: 1rem;
        font-weight: 400;
    }

    &:hover, &:focus, &:active {
        path { 
            fill: var(--green-dark);
        }  

        span { 
            color: var(--green-dark);
            font-size: 1rem;
            font-weight: 400;
        }
    }

    ${props => props.isSelected && css`
        &:hover, &:focus, &:active {
            background: transparent;

            
        }

        path { 
                fill: var(--green-dark);
        }

        span { 
            color: var(--green-dark);
            font-size: 1rem;
            font-weight: 400;
        }

        &:after {
            content: '';

            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--green-dark);
            border-radius: 99vw;

            opacity: 0;

            animation: fade-in .1s ease-in forwards;

            @keyframes fade-in {
                to {
                    opacity: 1;
                }
            }
        }
    `}
`

export const Label = styled.span`
    margin: 0 2rem;

    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.75rem;
`