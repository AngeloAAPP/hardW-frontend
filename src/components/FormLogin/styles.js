import styled from 'styled-components'

export const Container = styled.form`
    
    max-width: 600px;
    width: 100%;

    h1{
        margin-bottom: 80px;

        @media(max-width: 800px) {
            margin-bottom: 30px;
        }
    }

    input + span{
        margin: 20px 0;

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    input, button{
        @media(max-width: 800px) {
            height: 60px;
        }
    }


    a{
        color: var(--gray-light);
        text-decoration: none;
        display: block;
        max-width: max-content;

        &:hover{
            text-decoration: underline
        }
    }

    span{
        margin-top: 80px;
        color: var(--gray-light);
        font-size: 20px;
        font-weight: 300;
        display: block;

        &:last-child{
            @media(max-width: 800px) {
                text-align: center;
            }
        }

        a{
            @media(max-width: 800px) {
                margin: 0 auto
            }    
        }
    }

    @keyframes right{
        0%{
            transform: translateX(150px);
        }
        100%{
            transform: translateX(0px);
        }
    };
    
    animation: right 500ms;
`