import styled from 'styled-components'

export const Container = styled.div``

export const FindAdvertsLocation = styled.section`
    width: 100%;
    background: var(--primary);

    .content{
        max-width: 450px;
        margin: 0 auto;
        padding: 15px;
    }

    h1{
        text-align: center;
        font-weight: 300;
        color: var(--white);
        font-size: 12px;
    }

    .seletores{
        display: flex;
        margin-top: 11.25px;

        select{
            height: 37.5px;
            font-size: 12px;
            text-align: center;
            text-align-last: center;
            background: var(--white);
            margin-right: 3.75px;
        }

        .search{
            background-color: var(--white);
            height: 37.5px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90px;
            cursor: pointer;

            svg{
                color: var(--primary)
            }

            @media(max-width: 800px){
                width: 100%;
            }
        }

        @media(max-width: 800px){
            flex-direction: column;
        }
    }
`

export const Main = styled.main`
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    padding: 15px;
    display: grid;
    grid-template-columns: 225px 1fr;
    gap: 7.25px;

    @media(max-width: 800px){
        display: block;
    }
`

export const Filters = styled.section`

    background: var(--white);
    border: 2px solid var(--primary);
    border-radius: 8px;
    padding: 15px;
    align-self: flex-start;
    

    @media(max-width: 800px){
        margin-bottom: 10px;
        #filters{
            display: ${props => props.showFiltersMobile ? "block" : 'none'};
        }
    }

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary);

        @media(max-width: 800px){
            cursor: pointer;
        }
    }
    h2{
        font-size: 22.5px;
        font-weight: 300;
        margin-left: 3.75px;

        span{
            display: none;

            @media(max-width: 800px){
                display: inline;
            }
        }
    }

    details{
        margin-top: 7.5px;
        color: var(--primary);
    }

    summary{
        outline: none;
        cursor: pointer;
    }

    .options{
        margin-top: 6px;
        padding-left: 7.5px;
    }

    input[type=text]{
            border: 1px solid var(--primary);
            outline: none;
            width: 100%;
            border-radius: 8px;
            padding: 5px 10px;
            margin-bottom: 3px;
        }
    
    h3{
        font-weight: 400;
        font-size: 10px;
        color: var(--label-advert);
        margin: 6px 0;
        display: flex;
        align-items: center;

        svg{
            margin-right: 3.75px;
            color: var(--primary-dark)
        }
    }

    .option{
        margin-top: 3.75px;
    }

    label{
        margin-left: 7.5px;
        font-size: 12px;
        color: var(--black);
    }

    input{
        color: var(--primary);
    }

    button{
        max-width: 50%;
        height: 37.5px;
        font-size: 15px;
        margin: 0 auto;
        margin-top: 11.75px;
    }
`

export const Adverts = styled.section`
    background: var(--white);
    align-self: flex-start;
    border-radius: 8px;

    .notice{
        display: flex;
        justify-content: center;
        padding: 10px;
    }

    @media(max-width: 800px){
        background: initial;
    }
`