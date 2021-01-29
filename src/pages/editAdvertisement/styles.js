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

    .images{
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        margin: 20px 0px;
        justify-content: center;

        .image{
            height: 150px;
            width: 150px;
            position: relative;
            margin: 5px;
            border-radius: 8px;
            background-color: blue;

            @media(max-width: 600px){
                height: 130px;
                width: 130px;
            }

            svg.close{
                position: absolute;
                right: -8px;
                top: -8px;
                color: white;
                cursor: pointer;
                background-color: var(--primary);
                border-radius: 50%;
                font-size: 20px;
            }

            .opacity{
                opacity: 0.7;
            }

            .loading{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            button{
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 40px;
                border: none;
                background: white;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                cursor: pointer;
                border: 2px solid var(--primary);
                outline: none;
            }
        }

        img{
            width: 100%;
            height: 100%; 
            object-fit: cover;
            border-radius: 8px;
            border: 2px solid var(--primary);
        }
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

    p{
        text-align: center;
        margin-bottom: 20px;
    }

    @media(max-width: 800px){
        padding-bottom: 15px;
        margin-top: 0px;
    }
`