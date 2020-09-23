import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    justify-self: center;
    flex-direction: column;
    padding: 20px 50px;
    border-radius: 8px;
    position: relative;
    width: min(550px, 100%);

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        h1{
            color: var(--black-light);
            font-size: 24px;
        }
    }


    input{
        background: var(--gray-light);
        height: 70px;
        color: var(--black-light)
    }

    button{
        max-width: 100px;
        max-height: 50px;
        font-size: 16px;
        align-self: flex-end;
        margin-top: 20px;
        transition: background 300ms;

        background: var(--primary);
        color: var(--white);
        cursor: pointer;

        &:hover{
            background: var(--primary-dark);
        }
    }

    @media(max-width: 800px){
        padding: 20px;
        width: 100%;
    }
`