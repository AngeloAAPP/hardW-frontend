import styled from 'styled-components'

export const Container = styled.div`
    background: var(--white);
    padding: 11.25px;
    border-radius: 8px;
    cursor: pointer;
    

    @media(max-width: 800px){
        padding: 8px;
        margin-bottom: 10px;
    }

    .content{
        display: flex;
        border-bottom: 2px solid var(--primary);
        padding-bottom: 11.25px;

        @media(max-width: 800px){
            flex-direction: column;
            align-items: center;
            border-bottom: 0px;
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
                font-weight: 700;
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

            span{
                display: block;
                margin-top: 7.5px;
                color: var(--label-advert);
                font-size: 10.5px;
            }
        }
    }

    
`