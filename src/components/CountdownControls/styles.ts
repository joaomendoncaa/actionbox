import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 1rem;
`

interface ButtonProps {
    opacity: string
    active: boolean
}

export const Button = styled.button<ButtonProps>`
    font-family: 'Rajdhani', sans-serif;
    font-weight: 400;
    font-size: 1.75rem;
    border: 0;
    border-radius: 5px;

    outline: none;

    opacity: ${props => props.opacity};

    ${props => props.active === false && css`
        &:hover {
            opacity: .75;
        }
    `}

    background: var(--background-secondary);

    padding: 1.125rem 2rem;
`

interface PlaceholderProps {
    height: number
}

export const Placeholder = styled.div<PlaceholderProps>`
    width: 100%;
    height: ${props => props.height + "px"};
`