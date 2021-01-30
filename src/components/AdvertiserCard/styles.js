import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;

    .contact{
        width: 100%;
        margin-top: 6px;

        p{
            color: var(--label-advert);
            text-align: center;
            
            svg{
                color: var(--green-whatsapp);
                font-size: 12px;
            }
        }

        a{
            background-color: var(--green-whatsapp);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3.75px;
            display: flex;
            text-decoration: none;
            color: white;

            .text{
                font-size: 15px;
                margin-left: 3.75px;
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
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-top: 11.25px;

        img{
            width: 100%;
            height: 100%; 
            object-fit: cover;
            border-radius: 50%;
            border: 1.5px solid var(--primary);
        }
    }

    h3{
        margin-top: 11.25px;
        color: var(--label-advert);
        font-weight: 500;
        font-size: 18px;
    }

    span{
        color: var(--black-light);
        
        svg{
            fill: var(--primary) !important;
        }
    }
`