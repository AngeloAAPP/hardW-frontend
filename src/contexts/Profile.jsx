import React, {useState, useContext, createContext, useEffect} from 'react'

const Context = createContext({})

const AuthContext = ({children}) => {

    const [id, setID] = useState("")

    //Data = name, lastName, whatsapp, avatarUrl, etc
    const [data, setData] = useState({})

    

    return (

        <Context.Provider value = {{
            id, setID,
            data, setData
        }}>
            {children}
        </Context.Provider>
    )
}

export function useProfileUser(){
    const {
        id, setID,
        data, setData
    } = useContext(Context)

    return {
        id, setID,
        data, setData
    }
}

export default AuthContext