import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;

    img{
        max-width: 150px;
    }
`

export const FormSendPassword = styled.form`
    background: var(--white);
    padding: 30px;
    border-radius: 8px;

    input{
        background: var(--gray-light);
        height: 70px;
        color: var(--black-light);
    }

    button{
        height: 70px;
        font-size: 20px;
    }
`