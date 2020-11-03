import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-hardw.herokuapp.com"
})

export default api