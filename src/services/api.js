import axios from 'axios'

const api = axios.create({
    baseURL: 'https://bethehero-11.herokuapp.com'
})

export default api