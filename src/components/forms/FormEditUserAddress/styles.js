import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    justify-self: center;
    flex-direction: column;
    padding: 15px 37.5px;
    border-radius: 8px;
    position: relative;
    width: min(425px, 100%);

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;

        h1{
            color: var(--black-light);
            font-size: 18px;
        }
    }

    .edit{
        position: absolute;
        right: 11.25px;
        width: 22.5px;
        height: 22.5px;
        color: var(--primary);
        cursor: pointer;
        display: ${props => props.locked ? 'block' : 'none'};
        transition: color 300ms;

        &:hover{
            color: var(--primary-dark)
        }
    }

    input, select{
        background: var(--gray-light);
        height: 52.5px;
        color: ${props => props.locked ? 'var(--placeholder-input-white)' : 'var(--black-light)'}
    }

    input{
        width: 100%;
        padding: 15px;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        margin-bottom: 3.75px;

    }

    button{
        max-width: 75px;
        max-height: 37.5px;
        font-size: 12px;
        align-self: flex-end;
        margin-top: 7.5px;
        transition: background 300ms;

        background: ${props => props.locked? 'var(--gray-light)' : 'var(--primary)'};
        color: ${props => props.locked? 'var(--label-advert)' : 'var(--white)'};
        cursor: ${props => props.locked? 'initial' : 'pointer'};

        &:hover{
            background: ${props => props.locked? '' : 'var(--primary-dark)'};
        }
    }

    @media(max-width: 800px){
        padding: 20px;
        width: 100%;
    }
`