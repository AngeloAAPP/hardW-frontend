import styled from 'styled-components'

export const Container = styled.div`
    background: var(--white);
    width: 100%;
    padding: 11.25px;
    border-radius: 8px;
    margin-bottom: 7.5px;
    cursor: pointer;

    @media(max-width: 800px){
        padding: 8px;
    }

    .content{
        display: flex;

        @media(max-width: 800px){
            flex-direction: column;
            align-items: center;
        }

        .image{
            width: 225px;
            height: 123.75px;
            display: flex;
            justify-content: center;
            background: gray;
            border-radius: 8px;


            @media(max-width: 800px){
                max-width: 260px;
                margin-bottom: 8px;
            }

            img{
                max-width: 100%;
                max-height: 100%;
                border-radius: 8px;
            }
        }

        .info{

            margin-left: 7.5px;

            width: 100%;

            h1{
                font-weight: 500;
                font-size: 12px;
            }

            h2{
                color: var(--primary);
                font-size: 27px;
                margin-top: 7.5px;
                font-weight: 400;

                @media(max-width: 800px){
                    font-size: 24px;
                }
            }

            hr{
                margin-top: 11.25px;

                @media(max-width: 800px){
                    margin-top: 10px;
                }
                
            }
        }
    }

    .footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;

        @media(max-width: 800px){
            flex-direction: column;
            margin-top: 10px;
        }

        span{
            color: var(--label-advert);
            margin-left: 1.5px;
            font-size: 9px;

            @media(max-width: 800px){
                align-self: flex-start;
                margin-left: 5px;
            }
        }

        .buttons{
            display: flex;

            @media(max-width: 800px){
                margin-top: 10px;
            }

            button{
                height: auto;
                width: auto;
                font-size: 13.5px;
                padding: 3.75px 11.25px;
                font-weight: 300;
                background: var(--primary);

                &:first-child{
                    background: transparent;
                    color: var(--black);

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`