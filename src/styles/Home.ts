import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    max-width: 1250px;
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
` 

export const Main = styled.section`
    flex: 1;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9.375rem;
    align-content: center;
`

export const ControlsContainer = styled.div`
    height: 65vh;

    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`

export const ChallengeBoxContainer = styled.div`

`

export const CountdownWrapper = styled.div`

`
