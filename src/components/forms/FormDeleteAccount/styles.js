import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    flex-direction: column;
    padding: 20px 50px;
    border-radius: 8px;
    position: relative;
    width: 100%;

    svg{
        width: 420px;
        height: 420px;
        margin-top: -50px;
        fill: var(--placeholder-input-white);

        @media(max-width: 800px){
            width: 250px;
            height: 250px;
            margin-top: 0px;
        }
    }

    h1,h2{
        font-weight: 400;
    }
    h1{
        font-size: 24px;

        @media(max-width: 800px){
            font-size: 18px;
        }
    }

    h2{
        color: var(--label-advert);
        font-size: 18px;
        margin-top: 5px;

        @media(max-width: 800px){
            font-size: 14px;
        }
    }


    button{
        max-width: 280px;
        max-height: 50px;
        font-size: 16px;
        margin-top: 25px;
        transition: background 300ms;
        padding: 10px 50px;

        background: var(--primary);
        color: var(--white);
        cursor: pointer;

        &:hover{
            background: var(--primary-dark);
        }
    }

    @media(max-width: 800px){
        padding: 0;
    }
`