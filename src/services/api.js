import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-hardw.herokuapp.com"
})

export const setAuthorization = token => {
    api.defaults.headers.authorization = token
}

export default api