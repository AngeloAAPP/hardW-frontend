import styled from 'styled-components'

export const CustomCombobox = styled.select`
     width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '67.5px'};
    padding: 11.25px;
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    margin-bottom: 3.75px;
    color: var(--black-light);
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    @media(max-width: 800px){
        margin-bottom: 3px;
    }
    
    
    &::placeholder{
        color: var(--placeholder-input-white)
    }
`