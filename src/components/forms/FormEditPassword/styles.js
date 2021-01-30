import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    justify-self: center;
    flex-direction: column;
    padding: 15px 37.5px;
    border-radius: 8px;
    position: relative;
    width: min(425px, 100%);

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;

        h1{
            color: var(--black-light);
            font-size: 18px;
        }
    }


    input{
        background: var(--gray-light);
        height: 52.5px;
        color: var(--black-light)
    }

    button{
        max-width: 75px;
        max-height: 37.5px;
        font-size: 12px;
        align-self: flex-end;
        margin-top: 15px;
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