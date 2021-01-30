import styled from 'styled-components'

export const Container = styled.form`
    background: var(--white);
    border-radius: 8px;
    padding: 15px 45px;
    display: flex;
    flex-direction: column;

    @media(max-width: 800px){
        padding: 15px 15px;
    }

    h1{
        text-align: center;
        font-weight: 400;
        margin-bottom: 15px;
    }

    input{
        width: 100%;
        height: 67.5px;
        padding: 15px;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        background: var(--gray-light);
        color: var(--black);
        margin-bottom: 21px;

        @media(max-width: 800px){
            font-size: 16px;
            height: 60px;
        }
    
        &::placeholder{
            color: var(--label-advert);
        }
    }

    textarea{
        resize: vertical;
        min-height: 150px;
        padding: 15px;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        background: var(--gray-light);
        color: var(--black);
        margin-bottom: 21px;
        border: none;

        &::placeholder {
            color: var(--label-advert);
        }
    }

    button.btn{
        max-width: 112.5px;
        font-size: 15px;
        max-height: 52.5px;
        align-self: flex-end;
        margin-top: 37.5px;
        margin-bottom: 30px;
    }
`

