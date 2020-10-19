import styled from 'styled-components'

export const CustomCombobox = styled.select`
     width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '90px'};
    padding: 15px;
    border-radius: 8px;
    font-size: 20px;
    outline: none;
    margin-bottom: 5px;
    color: var(--black-light);
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    @media(max-width: 800px){
        font-size: 16px;
        margin-bottom: 3px;
    }
    
    
    &::placeholder{
        color: var(--placeholder-input-white)
    }
`