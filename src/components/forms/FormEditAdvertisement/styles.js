import styled from 'styled-components'

export const Container = styled.form`
    background: var(--white);
    border-radius: 8px;
    padding: 20px 60px;
    display: flex;
    flex-direction: column;

    @media(max-width: 800px){
        padding: 20px 20px;
    }

    h1{
        text-align: center;
        font-weight: 400;
        margin-bottom: 20px;
    }

    input{
        width: 100%;
        height: 90px;
        padding: 20px;
        border-radius: 8px;
        font-size: 20px;
        outline: none;
        background: var(--gray-light);
        color: var(--black);
        margin-bottom: 28px;

        @media(max-width: 800px){
            font-size: 16px;
            margin-bottom: 3px;
            height: 60px;
        }
    
        &::placeholder{
            color: var(--label-advert);
        }
    }

    textarea{
        resize: vertical;
        min-height: 200px;
        padding: 20px;
        border-radius: 8px;
        font-size: 20px;
        outline: none;
        background: var(--gray-light);
        color: var(--black);
        margin-bottom: 28px;
        border: none;

        &::placeholder {
            color: var(--label-advert);
        }
    }

    button.btn{
        max-width: 150px;
        font-size: 20px;
        max-height: 70px;
        align-self: flex-end;
        margin-top: 50px;
        margin-bottom: 40px;
    }
`

