import styled from 'styled-components'

export const Dropzone = styled.div`
    width: 200px;
    height: 200px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid var(--primary-dark);
    cursor: pointer;
    position: relative;
    margin-bottom: 30px;

    &:hover{
        opacity: .8;
    }


    svg{
        height: 70px;
        width: 70px;
        color: var(--primary);

        &.plus{
            height: 30px;
            width: 30px;
            position: absolute;
            top: 40px;
            right: 40px;
        }
    }

    img{
        width: 100%;
        height: 100%; 
        object-fit: cover;
        border-radius: 50%;
    }
`