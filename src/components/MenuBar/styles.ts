import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--background-secondary);

    width: 100%;
    height: 100%;
`

interface MenuButtonProps {
    isSelected: boolean
}

export const MenuButton = styled.a<MenuButtonProps>`
    cursor: pointer;
    border: 0;
    background: transparent;

    padding: 1.25rem 1.25rem;

    transition: .05s ease-in;

    position: relative;

    path { 
        transition: .05s linear;
        fill: #3B3B45;
    }

    &:hover, &:focus, &:active {
        path { 
            fill: var(--green-dark);
        }   
    }

    ${props => props.isSelected && css`
        &:hover, &:focus, &:active {
            background: var(--background-secondary);
        }


        path { 
                fill: var(--green-dark);
        }

        &:after {
            content: '';

            position: absolute;
            left: -2px;
            top: 0;
            bottom: 0;
            width: 4px;
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