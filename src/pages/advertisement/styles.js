import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    padding: 50px;

    @media(max-width: 600px){
        padding: 10px;
    }

    .title{
        h1{
            font-size: 20px;
            font-weight: 600;
        }
        h2{
            color: var(--label-advert);
            font-weight: 200;
            font-size: 14px;
            margin-top: 5px;
        }
    }

    .session-title{
        font-size: 20px;
        font-weight: 600;
        margin: 25px 0;
    }

    .description{
        background-color: var(--white);
        padding: 10px;
        color: var(--label-advert);
        line-height: 1.4;
        border-radius: 8px;
        max-width: 100%;
        overflow-wrap: anywhere;
    }

    .location{
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        justify-content: space-between;

        .info{

            margin-right: 5px;

            h2, h3{
                font-size: 16px;
            }

            h3{
                color: var(--label-advert);
                font-weight: 300;
                margin-top: 3px;
            }

        }
    }

    .categories{
        display: flex;
        max-width: 100%;
        flex-wrap: wrap;

        .info{
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--white);
            padding: 20px;

            &:first-child{
                margin-right: 50px;

                @media(max-width: 500px)
                {
                    margin-right: 15px;
                }
            }

            img{
                width: 180px;
                height: 180px;
                margin-bottom: 10px;

                @media(max-width: 800px)
                {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 15px;
    gap: 15px;

    @media(max-width: 820px){
        grid-template-columns: 1fr;
    }

    .left-content{
        width: 100%;

        @media(max-width: 820px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .main-image{
            width: 505px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: gray;
            border-radius: 8px;
            min-height: 400px;

            @media(max-width: 600px){
                width: 300px;
                min-height: auto;
            }

            img{
                max-width: 100%;
                max-height: 100%;
                border-radius: 8px;
            }
        }

        .all-images{
            display: flex;
            max-width: min(510px, 100%);
            margin-top: 5px;
            justify-content: center;

            @media(max-width: 600px){
                display: flex;
                flex-wrap: wrap;
            }

            img{
                width: 80px;
                height: 80px;
                border-radius: 8px;
                margin-right: 5px;
                cursor: pointer;

                @media(max-width: 600px){
                    margin-top: 5px;
                }
            }
        }

        .price{
            width: min(505px, 100%);
            text-align: center;
            color: var(--primary);
            background-color: var(--white);
            padding: 5px;
            font-size: 24px;
            border-radius: 8px;
            margin-top: 5px;
        }
    }
`