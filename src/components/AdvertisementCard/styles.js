import styled from 'styled-components'

export const Container = styled.div`
    background: var(--white);
    padding: 15px;
    border-radius: 8px;
    

    @media(max-width: 800px){
        padding: 8px;
        margin-bottom: 10px;
    }

    .content{
        display: flex;
        border-bottom: 2px solid var(--primary);
        padding-bottom: 15px;

        @media(max-width: 800px){
            flex-direction: column;
            align-items: center;
            border-bottom: 0px;
        }

        .image{
            width: 300px;
            height: 165px;
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

            margin-left: 10px;

            width: 100%;

            h1{
                font-weight: 700;
                font-size: 16px;
            }

            h2{
                color: var(--primary);
                font-size: 36px;
                margin-top: 10px;
                font-weight: 400;

                @media(max-width: 800px){
                    font-size: 24px;
                }
            }

            hr{
                margin-top: 15px;

                @media(max-width: 800px){
                    margin-top: 10px;
                }
                
            }

            span{
                display: block;
                margin-top: 10px;
                color: var(--label-advert);
                font-size: 14px;
            }
        }
    }

    
`