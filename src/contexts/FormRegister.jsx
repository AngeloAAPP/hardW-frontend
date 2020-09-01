import React, {useState, useContext, createContext} from 'react'

const FormContext = createContext({})

const FormRegister = ({children}) => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [street, setStreet] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [uf, setUF] = useState("")
    const [city, setCity] = useState("")


    return (
        <FormContext.Provider value = {{
            name, setName,
            lastName, setLastName,
            email, setEmail,
            password, setPassword,
            zipcode, setZipcode,
            street, setStreet,
            neighbourhood, setNeighbourhood,
            uf, setUF,
            city, setCity
        }}>
            {children}
        </FormContext.Provider>
    )
}

export function useFormRegister(){
    const {
        name, setName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        zipcode, setZipcode,
        street, setStreet,
        neighbourhood, setNeighbourhood,
        uf, setUF,
        city, setCity
    } = useContext(FormContext)

    return {
        name, setName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        zipcode, setZipcode,
        street, setStreet,
        neighbourhood, setNeighbourhood,
        uf, setUF,
        city, setCity
    }
}

export default FormRegister
