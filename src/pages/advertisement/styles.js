import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    @media(max-width: 800px){
        padding: 15px;
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
    background: var(--primary);

    @media(max-width: 800px){
        background: initial;
    }
`

export const FormContent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 150px;
    padding-bottom: 60px;

    @media(max-width: 800px){
        padding-bottom: 15px;
        margin-top: 0px;
    }
`