import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-top: 50px;
    max-width: 1700px;
    margin: 40px auto 0px auto;
    padding: 20px;

    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }

    h1{
        background: red;
        width: max-content;
    }

    .suggestion{
        display: none;
        margin-bottom: -10px;
        font-size: 12px;

        @media(max-width: 800px){
            display: block;           
        }
    }
`

export const Menu = styled.nav`
    display: flex;
    justify-content: center;

    ul{

        @media(max-width: 800px){
            display: flex;
            max-width: 100%;
        }
        
        li{
            background: var(--white);
            padding: 15px 50px;
            cursor: pointer;
            transition: background 200ms;

            @media(max-width: 800px){
                white-space: nowrap;
            }

            &:hover,
            &.active
            {
                background: var(--primary);
                color: var(--white);
            }

            @media(max-width: 800px){
                &:hover{
                    background: var(--white);
                    color: var(--black);
                }
            }

            &:first-child{
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;

                @media(max-width: 800px){
                    border-top-right-radius: 0px;
                    
                }
            }

            &:last-child{
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;

                @media(max-width: 800px){
                    border-top-right-radius: 8px;
                    border-bottom-left-radius: 0px;
                    border-bottom-right-radius: 0px;
                }
            }
        }
    }

    @media(max-width: 800px){
        overflow-x: scroll;

        ::-webkit-scrollbar {
            height: 4px;
            border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: var(--primary-dark);
            border-radius: 8px;
        }

        ::-webkit-scrollbar-track{
            
        }
    }
`