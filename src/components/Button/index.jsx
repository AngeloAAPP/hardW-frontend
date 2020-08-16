import React from 'react'
import {CustomButton} from './styles'

const Button = ({children, ...rest}) => {
    return (
        <CustomButton {...rest}> 
            {children}
        </CustomButton>
    )
}

export default Button
