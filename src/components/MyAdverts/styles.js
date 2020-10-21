import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    flex-direction: column;
    border-radius: 8px;
    position: relative;

    @media(max-width: 800px){
        padding: 20px;
    }
`
