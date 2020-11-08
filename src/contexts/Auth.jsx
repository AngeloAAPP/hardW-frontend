import React, {useState, useContext, createContext, useEffect} from 'react'

const context = createContext({})

const AuthContext = ({children}) => {

    const [authenticated, setAuthenticated] = useState(false)
    const [token, setToken] = useState("")
    const [refresh, setRefresh] = useState("")

    useEffect(() => {
        const tokenUser = localStorage.getItem("tokenUser")

        if(tokenUser){
            setAuthenticated(true)
            setToken(tokenUser)
        }
    }, [])

    const signIn = (token, refresh) => {
        console.log("rec token: ",token)
        console.log("rec refresh: ",refresh)
        localStorage.setItem("tokenUser", token)
        localStorage.setItem("Refresh", refresh)
        setToken(token)
        setRefresh(refresh)
        setAuthenticated(true)
    }

    const signOut = () => {
        localStorage.removeItem("tokenUser")
        localStorage.removeItem("Refresh")
        setToken("")
        setRefresh("")
        setAuthenticated(false)
    }


    return (
        <context.Provider value = {{
            authenticated, setAuthenticated,
            token, setToken,
            refresh, setRefresh,
            signIn, signOut,
            
        }}>
            {children}
        </context.Provider>
    )
}

export function useAuth(){
    const {
        authenticated, token, refresh, signIn, signOut
    } = useContext(context)

    return {
        authenticated, token, refresh, signIn, signOut
    }
}

export default AuthContext