import styled from 'styled-components'

export const CustomButton = styled.button`
    height: ${props => props.height ? props.height : '67.5px'};
    display: block;
    width: ${props => props.width ? props.width : '100%'};
    border-radius: 8px;
    background: var(--primary-dark);
    color: var(--text-btn-login);
    font-size: 27px;
    cursor: pointer;
    outline: none;
    transition: opacity 200ms;

    &:hover{
        opacity: 0.9;
    }
`