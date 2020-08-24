import React, {memo} from 'react'
import {CustomButton} from './styles'

const Button = ({children, height, width, ...rest}) => {
    return (
        <CustomButton type = "button" height = {height} width = {width} {...rest}> 
            {children}
        </CustomButton>
    )
}

export default memo(Button)
