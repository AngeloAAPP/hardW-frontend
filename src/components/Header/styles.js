import styled from 'styled-components'

export const Container = styled.header`
    background: var(--white);
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1700px;
    padding: 0 60px;
    margin: 0 auto;    

    @media(max-width: 800px){
        padding: 0 10px;
    }

    img{
        &.logo{
            width: 200px;
            height: 100px;
            padding: 8px;

            @media(max-width: 800px){
                width: 170px;
                height: 85px;
            }
        }
    }
`

export const Nav = styled.nav`

    display: flex;


    ul{
        display: flex;
        align-items: center;
        position: relative;

        .close{
                display: none;
                position: absolute;
                top: 50px;
                right: 50px;
                color: var(--black);
                cursor: pointer;
                background: none;
                font-size: 16px;
                padding: 10px;
                color: var(--primary);

                @media(max-width: 800px)
                {
                    display: block;
                }
        }

        li{
            position: relative;
            div{
                width: 60px;
                height: 60px;
                cursor: pointer;

                img{
                    max-height: 100%;
                    max-width: 100%;
                    border-radius: 50%;
                    border: 1px solid var(--primary);
                }
            }

            &.avatar-menu{
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;

                span{
                    display: none;
                    margin-top: 10px;

                    @media(max-width: 800px){
                        display: block;
                    }
                }

                ul{
                    display: ${props => props.hiddenMenu ? 'none' : 'flex'};
                    flex-direction: column;
                    background: var(--white);
                    position: absolute;
                    top: 100px;
                    border-radius: 8px;
                    animation: smallRight 500ms;
                    z-index: 10;
                    border: 1px solid var(--primary);

                    &::before{
                        content: '';
                        width: 16px;
                        height: 16px;
                        background-color: var(--white);
                        position: absolute;
                        top: -8px;
                        transform: rotate(45deg);
                        border-radius: 25%;
                        border-top: 1px solid var(--primary);
                        border-left: 1px solid var(--primary);


                        @media(max-width: 800px){
                            display: none;
                        }
                    }

                    @media(max-width: 800px){
                        position: initial;
                        display: flex;
                        border: none;
                    }

                    li, a, strong{
                        white-space: nowrap;
                        transition: backgroud 200ms;
                        width: 100%;
                        margin: 0;
                        text-align: center;
                        position: relative;

                        &:first-child{
                            
                        }

                        &:last-child{
                            
                        }
                    }

                    a, strong{
                        display: inline-block;
                        padding: 15px 20px;
                        font-weight: 400;

                        &:hover{
                            background: var(--primary);
                            color: var(--white);
                            cursor: pointer;
                            text-decoration: none;
                        }

                        &.radius-top{
                            border-top-left-radius: 8px;
                            border-top-right-radius: 8px;

                            @media(max-width: 800px){
                                border-radius: 0;
                                margin-top: 20px;
                            }
                        }

                        &.radius-bottom{
                            border-bottom-left-radius: 8px;
                            border-bottom-right-radius: 8px;

                            @media(max-width: 800px){
                                border-radius: 0
                            }
                        }
                    }

                }

                @media(max-width: 800px){
                    order: -2;
                }
            }

           

    
            a{
                color: var(--black);
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }

                &.btn{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    font-size: 36px;
                    cursor: pointer;
                    width: 140px;
                    height: 45px;
                    font-size: 16px;
                    background: var(--primary);
                    transition: background 200ms;
                    color: var(--white);
                    z-index: 9999999;

                    &:hover{
                        background: var(--primary-dark);
                        text-decoration: none;
                    }

                    @media(max-width: 800px)
                    {
                        width: 100px;
                    }
                }
             }
        }

        li + li{
            margin-left: 20px;

            &.username{
                margin-left: 50px;

                @media(max-width: 800px){
                    display: none;
                }
            }
        }

        @media(max-width: 800px){
            position: fixed;
            top: 0;
            right: 0;
            width: 250px;
            height: 100%;
            background: var(--white);
            display: ${props => props.mobile ? 'none' : 'flex'};
            animation: right 500ms;
            flex-direction: column;
            padding: 120px 0 20px 0;
            align-items: center;
            z-index: 2;

            li + li{
                margin-left: 0;
            }
        }
    }

    @keyframes right{
        0%{
            transform: translateX(150px);
        }
        100%{
            transform: translateX(0);
        }
    };

    @keyframes smallRight{
        0%{
            transform: translateX(20px);
        }
        100%{
            transform: translateX(0);
        }
    };
`