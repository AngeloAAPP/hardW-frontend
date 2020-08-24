import styled from 'styled-components'

export const CustomInput = styled.input`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '90px'};
    padding: 20px;
    border-radius: 8px;
    font-size: 20px;
    outline: none;
    margin-bottom: 5px;
    color: var(--black-light);

    @media(max-width: 800px){
        font-size: 16px;
        margin-bottom: 3px;
    }
    
    
    &::placeholder{
        color: var(--placeholder-input-white)
    }
`