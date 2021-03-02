import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template: 
        "pic info level" 1fr
        /4.0625rem auto auto;
    align-items: center;

    img {
        grid-area: pic;
        width: 4.0625rem;
        height: 4.0625rem;

        border-radius: 99vw;
    }
`

export const UserTextWrapper = styled.div`
    grid-area: info;

    display: flex;
    flex-direction: column;

    margin-left: 1rem;

    h1 {
        font-size: 1.25rem;
        font-weight: 600;
    }

    span {
        color: var(--text-secondary);
    }
`

export const UserLevelWrapper = styled.div`
    grid-area: level;
    justify-self: end;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 100%;
`

export const LevelBorder = styled.path`
    fill: var(--background-secondary);
`

export const LevelValue = styled.span`
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

