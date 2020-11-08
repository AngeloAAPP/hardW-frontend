import styled from 'styled-components'

export const Container = styled.div``

export const FindAdvertsLocation = styled.section`
    width: 100%;
    background: var(--primary);

    .content{
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }

    h1{
        text-align: center;
        font-weight: 300;
        color: var(--white);
        font-size: 16px;
    }

    .seletores{
        display: flex;
        margin-top: 15px;

        select{
            height: 50px;
            font-size: 16px;
            text-align: center;
            background: var(--white);

            &:first-child{
                margin-right: 5px;
            }
        }

        @media(max-width: 800px){
            flex-direction: column;
        }
    }
`

export const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 10px;
`

export const Filters = styled.section`

    background: var(--white);
    border: 2px solid var(--primary);
    border-radius: 8px;
    padding: 15px;
    align-self: flex-start;

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary)
    }
    h2{
        font-size: 30px;
        font-weight: 300;
        margin-left: 5px;
    }

    details{
        margin-top: 10px;
        color: var(--primary);
    }

    summary{
        outline: none;
        cursor: pointer;
    }

    .options{
        margin-top: 8px;
        padding-left: 10px;
    }

    .option{
        margin-top: 5px;
    }

    label{
        margin-left: 10px;
        color: var(--black);
    }

    input{
        color: var(--primary);
    }

    button{
        max-width: 50%;
        height: 50px;
        font-size: 20px;
        margin: 0 auto;
        margin-top: 15px;
    }
`

export const Adverts = styled.section`
    background: var(--white);
    align-self: flex-start;
    border-radius: 8px;
`