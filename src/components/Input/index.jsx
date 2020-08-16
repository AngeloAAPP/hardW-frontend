import React from 'react'
import {CustomInput} from './styles'

const Input = ({...rest}) => {
    return (
        <CustomInput spellcheck = {false} {...rest}/>
    )
}

export default Input
