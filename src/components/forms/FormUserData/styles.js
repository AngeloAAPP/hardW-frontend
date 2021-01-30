import styled from 'styled-components'

export const Container = styled.form`
    
    max-width: 450px;
    width: 100%;

    h2{
        margin-bottom: 45px;

        @media(max-width: 800px) {
            margin-bottom: 30px;
        }
    }

    input{
        width: 100%;
        height: 67.5px;
        padding: 20px;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        margin-bottom: 3.75px;
        color: var(--black-light);

        @media(max-width: 800px){
            font-size: 16px;
            margin-bottom: 3px;
        }
    
    
        &::placeholder{
            color: var(--placeholder-input-white)
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
        margin-top: 60px;
        color: var(--gray-light);
        font-size: 15px;
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