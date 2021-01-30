import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 7.5px;

    img{
        max-width: 112.5px;
    }
`

export const FormSendPassword = styled.form`
    background: var(--white);
    padding: 22.5px;
    border-radius: 8px;

    input{
        background: var(--gray-light);
        height: 52.5px;
        color: var(--black-light);
    }

    button{
        height: 52.5px;
        font-size: 15px;
    }
`