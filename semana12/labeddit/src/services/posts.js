import axios from 'axios'
import { BASE_URL } from '../constantes/urls'


export const getFeed = (setFeeds, setIsloading) => {
    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    setIsloading(true)
    axios
    .get(`${BASE_URL}/posts`, axiosConfig)
    .then((res) => {
        setFeeds(res.data)
        setIsloading(false)
    })
    .catch((err) => {
        console.log(err.data)
    })
}