import React, {useState, useContext, createContext, useEffect} from 'react'
import api from '../services/api'
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
            await getProfileData(refreshToken, userID)
            setLoading(false)
        }

        if(refreshToken && userID){
            isAuthenticated()
        }
            
    }, [])

    const getProfileData = async(refreshToken, userID) => {

        try {
            await refreshAuth(refreshToken, userID)

            const tokenStorage = localStorage.getItem('authorization')
            const response = await api.get('/users/profile', {
                params: {
                    userID
                },
                headers: {
                    'authorization': `Bearer ${tokenStorage}`
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

            api.interceptors.response.use(
                (response) => {
                  return response;
                },
                async function (error) {
                  if (error.response.status === 401 && authenticated) {
                      try {
                        await refreshAuth();
                        const response = await api.request(error.config)
                        return response
                      } catch (err) {
                          throw new Error(err)
                      }

                  }
                }
              );

              
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

    const refreshAuth = async(refreshStorage = null, idStorage = null) => {
        try {

            const response = await api.post('/authenticate/refresh', {
                user: idStorage ? idStorage : id,           
            }, {
                headers: {
                    'refresh': refreshStorage ? refreshStorage : refresh
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