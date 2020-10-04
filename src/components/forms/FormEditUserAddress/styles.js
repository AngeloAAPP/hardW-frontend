import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    justify-self: center;
    flex-direction: column;
    padding: 20px 50px;
    border-radius: 8px;
    position: relative;
    width: min(550px, 100%);

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        h1{
            color: var(--black-light);
            font-size: 24px;
        }
    }

    .edit{
        position: absolute;
        right: 15px;
        width: 30px;
        height: 30px;
        color: var(--primary);
        cursor: pointer;
        display: ${props => props.locked ? 'block' : 'none'};
        transition: color 300ms;

        &:hover{
            color: var(--primary-dark)
        }
    }

    input{
        background: var(--gray-light);
        height: 70px;
        color: ${props => props.locked ? 'var(--placeholder-input-white)' : 'var(--black-light)'}
    }

    button{
        max-width: 100px;
        max-height: 50px;
        font-size: 16px;
        align-self: flex-end;
        margin-top: 10px;
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