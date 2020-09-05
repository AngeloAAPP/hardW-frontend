import styled from 'styled-components'

export const Container = styled.form`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,h2{
        text-align: center
    }

    span{
        margin: 30px 0px;
        display: flex;
        align-items: center;
        color: white;
        width: max-content;
        align-self: flex-start;

        svg{
            margin-right: 5px;
        }

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    button{
        @media(max-width: 800px) {
            height: 60px;
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