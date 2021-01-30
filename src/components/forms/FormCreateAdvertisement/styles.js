import styled from 'styled-components'

export const Container = styled.form`
    background: var(--white);
    border-radius: 8px;
    padding: 15px 45px;
    display: flex;
    flex-direction: column;

    @media(max-width: 800px){
        padding: 20px 20px;
    }

    h1{
        text-align: center;
        font-weight: 400;
        margin-bottom: 15px;
    }

    input{
        width: 100%;
        height: 67.5px;
        padding: 15px;
        border-radius: 8px;
        font-size: 15px;
        outline: none;

        @media(max-width: 800px){
            margin-bottom: 3px;
        }
    
    
        &::placeholder{
            color: var(--placeholder-input-white)
        }
    }

    textarea{
        resize: vertical;
        min-height: 150px;
        padding: 15px;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        background: var(--gray-light);
        color: var(--black);
        margin-bottom: 21px;
        border: none;

        &::placeholder {
            color: var(--label-advert);
        }
    }

    input, select{
        background: var(--gray-light);
        color: var(--black);
        margin-bottom: 21px;
        
        @media(max-width: 800px){
            height: 60px;
        }
        
        &::placeholder {
            color: var(--label-advert);
        }
    }

    label{
        color: var(--black-light);
        display: block;
        margin-bottom: 21px;
    }

    .subcategories{
        img{
            max-width: 150px;
            border: 1.5px solid var(--primary);
            border-radius: 8px;
            margin-right: 3.75px;
            padding: 16.5px;
            cursor: pointer;

            &.selected, &:hover{
                border-width: 7.5px;
                padding: 10.5px;
                @media(max-width: 800px){
                    padding: 7px;
                }
            }

            @media(max-width: 800px){
                padding: 15px;
                max-width: 33%;
            }
        }
    }

    button.btn{
        max-width: 112.5px;
        font-size: 15px;
        max-height: 52.5px;
        align-self: flex-end;
        margin-top: 37.5px;
        margin-bottom: 30px;
    }
`

