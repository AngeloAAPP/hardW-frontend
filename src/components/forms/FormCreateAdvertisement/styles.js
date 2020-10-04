import styled from 'styled-components'

export const Container = styled.form`
    background: var(--white);
    border-radius: 8px;
    padding: 20px 60px;
    display: flex;
    flex-direction: column;

    h1{
        text-align: center;
        font-weight: 400;
        margin-bottom: 20px;
    }

    input, select{
        background: var(--gray-light);
        color: var(--black);
        margin-bottom: 28px;
        
        &::placeholder {
            color: var(--label-advert);
        }
    }

    label{
        color: var(--black-light);
        display: block;
        margin-bottom: 28px;
    }

    .subcategories{
        img{
            max-width: 33%;
            border: 2px solid var(--primary);
            border-radius: 8px;
            margin-right: 5px;
            padding: 30px;
            cursor: pointer;

            &.selected, &:hover{
                border-width: 10px;
                padding: 22px;
            }
        }
    }

    button{
        max-width: 150px;
        font-size: 20px;
        max-height: 70px;
        align-self: flex-end;
        margin-top: 50px;
        margin-bottom: 40px;
    }
`

