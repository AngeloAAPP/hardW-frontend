import styled from 'styled-components'

export const Container = styled.form`
    max-width: 450px;
    width: 100%;

    span{
        margin: 22.5px 0px;
        display: flex;
        align-items: center;
        color: var(--white);
        width: max-content;

        svg{
            margin-right: 3.75px;
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

    input{
        width: 100%;
        height: 67.5px;
        padding: 15px;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        margin-bottom: 3.75px;
        color: var(--black-light);

        @media(max-width: 800px){
            margin-bottom: 3px;
        }
    
    
        &::placeholder{
            color: var(--placeholder-input-white)
        }
    }

    select{
        background-color: var(--white);
    }

    p{
        color: var(--white);
        margin-top: 22.5px;
        font-size: 14px;

        @media(max-width: 800px) {
            
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