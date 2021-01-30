import styled from 'styled-components'

export const CustomInput = styled.input`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '67.5px'};
    padding: 15px;
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    margin-bottom: 3.75px;
    color: var(--black-light);    
    
    &::placeholder{
        color: var(--placeholder-input-white)
    }
`