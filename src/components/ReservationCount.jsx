import { useEffect, useState } from "react"

const ReservationCount = () => {
  const [reservations, setReservations] = useState([])
const URL = import.meta.env.VITE_BACKEND 

useEffect(() => {
  fetch(URL + "/api/v1/reservations")
    .then((res) => res.json())
    .then((data) => {
      setReservations(data)
      //console.log(data)
    })
}, [])



  return (
    <div>
      <h2>All reservation count</h2>
      <p>{reservations.length}</p>
    </div>
  )
}

export default ReservationCount