import axios from "axios"
import { useEffect, useState } from "react"

export const useTripsList = () => {
    const [ trips, setTrips ] = useState([])

    useEffect(() => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipecarvalho/trips')
        .then((res) => {
          setTrips(res.data.trips)
        })
        .catch()
      },[])

      return trips
}