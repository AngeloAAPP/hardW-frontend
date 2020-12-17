import styled, {createGlobalStyle} from 'styled-components'

export const PersonalizedBackgroundColor = createGlobalStyle`

    body{
        background: var(--primary);
    }
`

export const Container = styled.div`
    width: 100%;

    @media(max-width: 800px){
        padding: 15px;
    }

    &::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--gray-light);
        z-index: -1;
        height: 40rem;
    }
`


export const Content = styled.main`
    max-width: 1000px;
    margin: 0 auto;

    #MultipleDropzone{
        margin-top: 60px;
        @media(max-width: 800px){
            margin-top: 15px;
        }
    }

    p{
        text-align: center;
        color: var(--label-advert);
        margin: 15px 0;
        font-size: 12px;
    }

`


export const Form = styled.div`

    @media(max-width: 800px){
        background: initial;
    }
`

export const FormContent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 60px;

    @media(max-width: 800px){
        padding-bottom: 15px;
        margin-top: 0px;
    }
`