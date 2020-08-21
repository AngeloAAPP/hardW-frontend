import React from 'react'
import {CustomButton} from './styles'

const Button = ({children, height, width, ...rest}) => {
    return (
        <CustomButton height = {height} width = {width} {...rest}> 
            {children}
        </CustomButton>
    )
}

export default Button
