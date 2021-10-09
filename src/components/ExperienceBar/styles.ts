import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const BarWrapper = styled.div`
    height: 14px;
    background: var(--background-expbar);
    
    padding: 5px;

    border-radius: 99vw;
`

interface Bar {
    percentage: number
}

export const Bar = styled.div<Bar>`
    width: ${props => props.percentage ? props.percentage : 0}%;

    height: 100%;
    background-image: linear-gradient(
        90deg,
        var(--green-dark) 32.5%,
        #A0FFD2 50%,
        var(--green-dark) 67.5%
    );
    background-size: 400% 400%;
    animation: shimmer 1.4s linear infinite;

    transition: all 1s ease-in-out;

    @keyframes shimmer {
        from {
            background-position: 0% 0%;
        }
        to {
            background-position: -135% 0%;
        }
    }

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 5px 5px 0 5px;

    color: var(--text-primary);
    font-family: 'Rajdhani', sans-serif;
`

export const ExpInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    font-weight: bolder;
`

export const CurrentExp = styled.span`
    color: var(--green-light);
`

export const Slash = styled.span`
    font-size: .75rem;
        margin: 0 1px;
`

export const MaximumExp = styled.span`

`

