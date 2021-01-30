import React from 'react'
import {CustomCombobox} from './styles'

const Combobox = ({children, ...rest}) => {
    return (
        <CustomCombobox {...rest}>
            {children}
        </CustomCombobox>
    )
}

export default Combobox
