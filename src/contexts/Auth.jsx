import React, {useState, useContext, createContext, useEffect} from 'react'
import api from '../services/api'

const context = createContext({})

const AuthContext = ({children}) => {

    const [authenticated, setAuthenticated] = useState(false)
    const [token, setToken] = useState("")
    const [refresh, setRefresh] = useState("")
    const [id, setID] = useState("")

    //Data = name, lastName, whatsapp, avatarUrl, etc
    const [data, setData] = useState({})

    useEffect(() => {
        const tokenUser = localStorage.getItem("tokenUser")

        if(tokenUser){
            setAuthenticated(true)
            setToken(tokenUser)
        }
    }, [])

    const signIn = async (email, password) => {

        try {
            const response = await api.post('/authenticate', {
                email,
                password
            })
            
            const {id,name, lastName, whatsapp, avatarUrl} = response.data
            const {authorization, refresh} = response.headers

            const data = {
                name,
                lastName,
                whatsapp,
                avatarUrl
            }

            setID(id)
            setData(data)
            setToken(authorization)
            setRefresh(refresh)
            setAuthenticated(true)

            localStorage.setItem("authorization", authorization)
            localStorage.setItem("refresh", refresh)
            localStorage.setItem("id", id)
        } catch (err) {
            throw new Error(err.response.data.message)
        }
        
       
       
    }

    const signOut = () => {
        localStorage.removeItem("tokenUser")
        localStorage.removeItem("Refresh")
        setToken("")
        setRefresh("")
        setAuthenticated(false)
    }

    const refreshAuth = async() => {
        try {
            const response = await api.post('/authenticate/refresh', {
                user: id,           
            }, {
                headers: {
                    'refresh': refresh
                }
            })

            const {authorization, refresh: refreshToken} = response.headers

            setToken(authorization)
            setRefresh(refreshToken)

            localStorage.setItem("authorization", authorization)
            localStorage.setItem("refresh", refreshToken)
        } catch (err) {
            throw new Error(err.response.data.message)
        }
    }


    return (
        <context.Provider value = {{
            authenticated,
            token,
            refresh,
            signIn, signOut, refreshAuth,
            id,
            data,
            
        }}>
            {children}
        </context.Provider>
    )
}

export function useAuth(){
    const {
        authenticated, token, refresh, signIn, signOut, refreshAuth,  id, data,
    } = useContext(context)

    return {
        authenticated, token, refresh, signIn, signOut, refreshAuth,  id, data
    }
}

export default AuthContext