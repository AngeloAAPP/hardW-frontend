import styled from 'styled-components'

export const Container = styled.div`
    width: 38px;
    height: 32px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 500ms;


    @media(max-width: 800px){
        display: flex;

    }

    &:hover{
        background-color: var(--primary);
    }

    &:hover *{
        background-color: var(--white);
    }
`
export const Linha = styled.div`
    width: 100%;
    height: 2px;
    background-color: var(--black-light);
`
