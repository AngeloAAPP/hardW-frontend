import styled from 'styled-components'

export const Dropzone = styled.div`
    width: 150px;
    height: 150px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3.75px solid var(--primary-dark);
    cursor: pointer;
    position: relative;
    margin-bottom: 22.5px;

    &:hover{
        opacity: .8;
    }


    svg{
        height: 52.5px;
        width: 52.5px;
        color: var(--primary);

        &.plus{
            height: 22.5px;
            width: 22.5px;
            position: absolute;
            top: 30px;
            right: 30px;
        }
    }

    img{
        width: 100%;
        height: 100%; 
        object-fit: cover;
        border-radius: 50%;
    }
`