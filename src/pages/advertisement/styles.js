import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`


export const Content = styled.main`
    max-width: 1000px;
    margin: 0 auto;

    #MultipleDropzone{
        margin-top: 100px;
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
`

export const FormContent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 150px;
    padding-bottom: 100px;
`