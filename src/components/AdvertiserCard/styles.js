import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;

    .contact{
        width: 100%;
        margin-top: 8px;

        p{
            color: var(--label-advert);
            text-align: center;
            
            svg{
                color: var(--green-whatsapp);
                font-size: 16px;
            }
        }

        a{
            background-color: var(--green-whatsapp);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            display: flex;
            text-decoration: none;
            color: white;

            .text{
                font-size: 20px;
                margin-left: 5px;
            }
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        text-align: center;
        font-weight: 500;
    }

    .image{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: 15px;

        img{
            width: 100%;
            height: 100%; 
            object-fit: cover;
            border-radius: 50%;
            border: 2px solid var(--primary);
        }
    }

    h3{
        margin-top: 15px;
        color: var(--label-advert);
        font-weight: 500;
        font-size: 24px;
    }

    span{
        color: var(--black-light);
        
        svg{
            fill: var(--primary) !important;
        }
    }
`