import styled from 'styled-components'

export const CustomInput = styled.input`
    width: 100%;
    height: 90px;
    padding: 20px;
    border-radius: 8px;
    font-size: 20px;
    outline: none;
    margin-bottom: 5px;
    color: var(--black-light);
    
    
    &::placeholder{
        color: var(--placeholder-input-white)
    }
`