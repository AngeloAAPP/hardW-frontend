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
    margin-bottom: 20px;

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

    .avatar{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        position: relative;

        img{
            width: 100%;
            height: 100%; 
            object-fit: cover;
            border-radius: 50%;
            border: 3.75px solid var(--primary-dark);
        }
    }

    .btn-avatar{
        margin: 0 auto;
        margin-top: 6px;
        padding: 0 3.75px;
    }

    .buttons{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 7.5px;
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

    span.about{
        display: flex;
        align-items: center;
        font-size: 10.5px;
        color: var(--black-light);
        margin-bottom: 7.5px;

        svg{
            fill: var(--primary);
            width: 18.75px;
            height: 18.75px;
            margin-left: 7.5px;
        }
    }

    span.note{
        align-self: flex-start;
        font-size: 9px;
        color: var(--label-advert);
        margin-top: 3.75px;
    }

    input{
        width: 100%;
        background: var(--gray-light);
        height: 52.5px;
        color: ${props => props.locked ? 'var(--placeholder-input-white)' : 'var(--black-light)'};
        padding: 15px;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        margin-bottom: 3.75px;

        &.notEditable{
            color: var(--placeholder-input-white);
        }
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