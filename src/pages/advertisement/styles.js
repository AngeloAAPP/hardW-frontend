import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    div.loading{
        padding: 37.5px;
        display: flex;
        align-items: center;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    height: 100%;
    padding: 37.5px;

    @media(max-width: 600px){
        padding: 10px;
    }

    .title{
        h1{
            font-size: 15px;
            font-weight: 600;
        }
        h2{
            color: var(--label-advert);
            font-weight: 200;
            font-size: 10.5px;
            margin-top: 37.5px;
        }
    }

    .session-title{
        font-size: 15px;
        font-weight: 600;
        margin: 18.75px 0;
    }

    .description{
        background-color: var(--white);
        padding: 7.5px;
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

            margin-right: 3.75px;

            h2, h3{
                font-size: 14px;
            }

            h3{
                color: var(--label-advert);
                font-weight: 300;
                margin-top: 2.25px;
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
            padding: 15px;

            &:first-child{
                margin-right: 37.5px;

                @media(max-width: 500px)
                {
                    margin-right: 15px;
                }
            }

            img{
                width: 135px;
                height: 135px;
                margin-bottom: 7.5px;

                @media(max-width: 800px)
                {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }

    .questions-container{

        background: var(--white);
        padding: 15px;
        border-radius: 8px;

        .ask, .to-reply{
            display: flex;
            margin-bottom: 15px;

            input, button{
                height: 45px;
                background: var(--gray-light);

                @media(max-width: 800px){
                    height: 40px;
                }
            }

            input{
                font-size: 12px;

                @media(max-width: 800px){
                    font-size: 12px;
                }

                &::placeholder{
                    color: var(--label-advert);
                }
            }
            
            button{
                max-width: 45px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 3.75px;
                color: var(--primary-dark);

                @media(max-width: 800px){
                    max-width: 40px;

                    svg{
                        font-size: 16px;
                    }
                }
            }
        }

        .to-reply{
            margin-bottom: 0;
            margin-top: 7.5px;
        }

        .question{
            margin-bottom: 15px;

            .content, .answer{
                display: flex;
                align-items: center;

                svg{
                    color: var(--primary);
                    font-size: 18px;
                    margin-right: 11.25px;
                    flex-shrink: 0;
                }

                p{
                    font-weight: 550;
                    font-size: 12px;
                    overflow-wrap: anywhere;

                    time{
                        font-size: 9px;
                        color: var(--label-advert);
                        margin-left: 3.75px;
                        font-weight: 400;
                    }

                }
            }

            .answer{
                margin-left: 26.25px;
                margin-top: 3.75px;

                @media(max-width: 800px){
                    margin-top: 15px;
                }

                p{
                    font-weight: 400;
                    font-size: 10.5px;
                    color: var(--label-advert);
                    overflow-wrap: anywhere;
                }
            }
        }
    }
        span{
            display: block;
            margin-bottom: 7.5px;
            color: var(--label-advert);
        }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 11.25px;
    gap: 11.25px;

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

        .no-image{
            width: 378.75px;
            height: calc(100% - 32.25px);
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--placeholder-input-white);
            border-radius: 8px;
            min-height: 300px;

            @media(max-width: 600px){
                width: 100%;
                min-height: 200px;
            }
        }

        .main-image{
            width: 378.75px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--placeholder-input-white);
            border-radius: 8px;
            height: 300px;
            position: relative;

            @media(max-width: 600px){
                width: 300px;
            }

            img{
                max-width: 100%;
                max-height: 100%;
                border-radius: 8px;
            }

            svg{
                position: absolute;
                font-size: 60px;
                cursor: pointer;
                color: white;
                stroke: black;
                stroke-width: 0.4px;

                &.before{
                    left: 0;
                }

                &.next{
                    right: 0;
                }

                @media(max-width: 600px){
                    font-size: 50px;
                }
            }
        }

        .all-images{
            display: flex;
            max-width: min(382.5px, 100%);
            margin-top: 3.75px;
            justify-content: center;

            @media(max-width: 600px){
                display: flex;
                flex-wrap: wrap;
            }

            img{
                width: 60px;
                height: 60px;
                border-radius: 8px;
                margin-right: 3.75px;
                cursor: pointer;

                @media(max-width: 600px){
                    margin-top: 5px;
                }

                &.selected{
                    border: 2.25px solid var(--primary);
                }
            }
        }

        .price{
            width: min(378.75px, 100%);
            text-align: center;
            color: var(--primary);
            background-color: var(--white);
            padding: 3.75px;
            font-size: 18px;
            border-radius: 8px;
            margin-top: 3.75px;
        }
    }
`