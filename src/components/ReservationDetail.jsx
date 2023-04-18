import { useEffect, useState } from "react";



const ReservationDetail = () => {
  const [reservations, setReservations] = useState([]);

  const URL = import.meta.env.VITE_BACKEND 

  useEffect(() =>{
    fetch(URL + "/api/v1/reservations")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setReservations(data)
    })
  }, [])

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString()
  }
  return (
    <div>
      <h1>Reservation Detail</h1>
      {reservations.map((item, key) => 
      <div key={key}>
        <h4>{item.boat[0].name}</h4>
        <p>Start Date: {formatDate(item.startDate)}</p>
        <p>End Date: {formatDate(item.endDate)}</p>
      </div>)}
      
    </div>

  )
}

export default ReservationDetail;