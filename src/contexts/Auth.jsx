import React, {useState, useContext, createContext, useEffect} from 'react'
import api, {setAuthorization} from '../services/api'
import LoadingAnimation from '../components/LoadingApplication'

const context = createContext({})

const AuthContext = ({children}) => {

    const [authenticated, setAuthenticated] = useState(false)
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
            api.defaults.headers.uID = userID
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

            const {name, lastName, whatsapp, email, avatarUrl, adverts, address, createdAt} = response.data

            const data = {
                name,
                lastName,
                whatsapp,
                email,
                avatarUrl,
                address,
                adverts,
                createdAt
            }

            setData(data)
            setAuthenticated(true)
        } catch (error) {

            console.log("sessao exp: ", error)

            localStorage.removeItem("authorization")
            localStorage.removeItem("refresh")
            localStorage.removeItem("id")

            api.defaults.headers.authorization = ""
            api.defaults.headers.uID = ""
            setAuthenticated(false)

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
            
            const {id,name, lastName, whatsapp, avatarUrl, adverts, address, createdAt} = response.data
            const {authorization, refresh} = response.headers

            const data = {
                name,
                lastName,
                whatsapp,
                email,
                avatarUrl,
                address,
                adverts,
                createdAt
            }

            setID(id)
            setData(data)
            setAuthenticated(true)

            localStorage.setItem("authorization", authorization)
            localStorage.setItem("refresh", refresh)
            localStorage.setItem("id", id)

            api.defaults.headers.uID = id
            setAuthorization(authorization)
            setAxiosConfig()
              
        } catch (err) {
            throw new Error(err.response.data.message)
        }
        
       
       
    }

    const signOut = async() => {

        const refresh = localStorage.getItem("refresh")

        api.post('/authenticate/logout', undefined , {
            headers: {
                refresh
            }
        })

        localStorage.removeItem("authorization")
        localStorage.removeItem("refresh")
        localStorage.removeItem("id")

        api.defaults.headers.authorization = ""
        api.defaults.headers.uID = ""
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

                        api.defaults.headers.authorization = ""
                        api.defaults.headers.uID = ""
                        setAuthenticated(false)
        
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


            const {authorization, refresh} = response.headers
            setAuthorization(authorization)
            setAxiosConfig()

            localStorage.setItem("authorization", authorization)
            localStorage.setItem("refresh", refresh)
            return true
        } catch (err) {
            return false
        }
    }

    const updateUserData = newData => {
        setData({
            ...data,
            ...newData
        })
    }


    return (
        <context.Provider value = {{
            authenticated,
            signIn, signOut,
            id,
            data,
            updateUserData,
        }}>
            {loading ? <LoadingAnimation/> : children}
        </context.Provider>
    )
}

export function useAuth(){
    const {
        authenticated, signIn, signOut, id, data, updateUserData
    } = useContext(context)

    return {
        authenticated, signIn, signOut, id, data, updateUserData
    }
}

export default AuthContext