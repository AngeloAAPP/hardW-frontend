import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    background: var(--primary-dark);
    
    @media(max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const LeftSide = styled.div`
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 165px;
        height: 82.5px;
    }

    @media(max-width: 800px) {
        display: none;
    }

`

export const RightSide = styled.main`
    padding: 22.5px;
    background: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
`


