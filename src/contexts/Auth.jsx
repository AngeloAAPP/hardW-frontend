import React, {useState, useContext, createContext, useEffect} from 'react'
import api, {setAuthorization} from '../services/api'
import LoadingAnimation from '../components/LoadingApplication'

const context = createContext({})

const AuthContext = ({children}) => {

    const [authenticated, setAuthenticated] = useState(false)
    const [token, setToken] = useState("")
    const [refresh, setRefresh] = useState("")
    const [id, setID] = useState("")
    const [loading, setLoading] = useState(false)

    //Data = name, lastName, whatsapp, avatarUrl, etc
    const [data, setData] = useState({})

    useEffect(() => {

        const refreshToken = localStorage.getItem("refresh")
        const userID = localStorage.getItem("id")
    

        async function isAuthenticated(){
            setLoading(true)
            await getProfileData(userID)
            setLoading(false)
        }

        if(refreshToken && userID){
            api.defaults.headers.common['uID'] = userID
            isAuthenticated()
        }
            
    }, [])

    const getProfileData = async(userID) => {

        try {
            await refreshAuth()

            const response = await api.get('/users/profile', {
                params: {
                    userID
                }
            })
            
            const {name, lastName, whatsapp, avatarUrl, adverts, address} = response.data

            const data = {
                name,
                lastName,
                whatsapp,
                avatarUrl,
                address,
                adverts
            }

            setData(data)
            setAuthenticated(true)
        } catch (error) {
            localStorage.removeItem("authorization")
            localStorage.removeItem("refresh")
            localStorage.removeItem("id")

            alert("A sessão expirou. Faça login novamente")
            window.location.pathname = '/login'
        }
    }

    const signIn = async (email, password) => {

        try {
            const response = await api.post('/authenticate', {
                email,
                password
            })
            
            const {id,name, lastName, whatsapp, avatarUrl, adverts, address} = response.data
            const {authorization, refresh} = response.headers

            const data = {
                name,
                lastName,
                whatsapp,
                avatarUrl,
                address,
                adverts
            }

            setID(id)
            setData(data)
            setToken(authorization)
            setRefresh(refresh)
            setAuthenticated(true)

            localStorage.setItem("authorization", authorization)
            localStorage.setItem("refresh", refresh)
            localStorage.setItem("id", id)

            api.defaults.headers.common['uID'] = id
            setAuthorization(authorization)
            setAxiosConfig()
              
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

    const setAxiosConfig = () => {


        api.interceptors.response.use(
            undefined,
            async error =>{
                 if(error.response.status === 401){
                        const response = await refreshAuth();

                        if(response){
                            const newToken = localStorage.getItem('authorization')
                            error.config.headers['authorization'] = newToken;
                            return Promise.resolve(api.request(error.config))
                        }
                        else{
                            localStorage.removeItem("authorization")
                            localStorage.removeItem("refresh")
                            localStorage.removeItem("id")
            
                            alert("A sessão expirou. Faça login novamente")
                            window.location.pathname = '/login'
                        }  
                 }
                 else
                    return Promise.reject(error)
            }
          );

    }

    const refreshAuth = async() => {

        const refreshStorage = localStorage.getItem("refresh")
        const idStorage = localStorage.getItem("id")

        try {
            const response = await api.post('/authenticate/refresh', {
                user: idStorage          
            }, {
                headers: {
                    'refresh': refreshStorage
                }
            })


            const {authorization, refresh: refreshToken} = response.headers
            setAuthorization(authorization)
            setAxiosConfig()

            setToken(authorization)
            setRefresh(refreshToken)

            localStorage.setItem("authorization", authorization)
            localStorage.setItem("refresh", refreshToken)
            console.log("fim refresh")
            return true
        } catch (err) {
            return false
        }
    }


    return (
        <context.Provider value = {{
            authenticated,
            token,
            refresh,
            signIn, signOut, refreshAuth,
            id,
            data
        }}>
            {loading ? <LoadingAnimation/> : children}
        </context.Provider>
    )
}

export function useAuth(){
    const {
        authenticated, token, refresh, signIn, signOut, refreshAuth,  id, data
    } = useContext(context)

    return {
        authenticated, token, refresh, signIn, signOut, refreshAuth,  id, data
    }
}

export default AuthContext