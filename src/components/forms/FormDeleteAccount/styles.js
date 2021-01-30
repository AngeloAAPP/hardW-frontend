import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    flex-direction: column;
    padding: 15px 37.5px;
    border-radius: 8px;
    position: relative;
    width: 100%;

    svg{
        width: 315px;
        height: 315px;
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
        font-size: 18px;
    }

    h2{
        color: var(--label-advert);
        font-size: 13.5px;
        margin-top: 3.75px;
    }


    button{
        max-width: 210px;
        max-height: 35.5px;
        font-size: 11px;
        margin-top: 18.75px;
        transition: background 300ms;
        padding: 7.5px 37.5px;

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