import styled from 'styled-components'

export const Container = styled.form`
    max-width: 600px;
    width: 100%;

    span{
        margin: 30px 0px;
        display: flex;
        align-items: center;
        color: var(--white);
        width: max-content;

        svg{
            margin-right: 5px;
        }

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    input, button, select{
        @media(max-width: 800px) {
            height: 60px;
        }
    }

    select{
        background-color: var(--white);
    }

    p{
        color: var(--white);
        margin-top: 30px;

        @media(max-width: 800px) {
            font-size: 14px;
            text-align: center;
        }
    }

    @keyframes left{
        0%{
            transform: translateX(-150px);
        }
        100%{
            transform: translateX(0px);
        }
    };
    
    animation: left 500ms;

`