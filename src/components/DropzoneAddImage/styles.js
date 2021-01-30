import styled from 'styled-components'

export const Dropzone = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: 1.5px solid var(--primary);
    border-radius: 8px;
    outline: none;

    &:hover{
        opacity: .8;
    }

    p{
        text-align: center;
    }

    svg{
        height: 52.5px;
        width: 52.5px;
        color: var(--primary);
    }

    img{
        width: 100%;
        height: 100%; 
        object-fit: cover;
        border-radius: 50%;
        border: none !important;
    }
`