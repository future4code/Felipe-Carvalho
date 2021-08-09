import axios from 'axios'
import { BASE_URL } from '../constantes/urls'
import { goToFeed } from '../routes/coordinates'

export const login = (body, clear, history) => {
    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => {
            alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
        })
    }

export const signUp = (body, clear, history) => {
    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => {
            alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
        })
    }
