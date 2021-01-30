import React from 'react'
import {CustomInput} from './styles'

const Input = ({height, width, ...rest}) => {
    return (
        <CustomInput spellcheck = {false} height = {height} width = {width} {...rest}/>
    )
}

export default Input
