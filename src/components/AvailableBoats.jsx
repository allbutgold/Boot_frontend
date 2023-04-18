import { useEffect, useState } from "react"

const AvailableBoats = () => {
  const [boats, setBoats] = useState([])
  const URL = import.meta.env.VITE_BACKEND 

  useEffect(() => {
    fetch(URL + '/api/v1/availiableBoats', {
      method: "POST",
      body: JSON.stringify({ startDate: new Date().getTime(), endDate: new Date().getTime()}),
      headers: { "Content-Type": "application/json" }
    })
    .then((res) => res.json())
    .then((data) => { 
      setBoats(data)
      console.log(data)
    })
  })
  return (
    <div>
      <h2>Available Boats</h2>
      <p>{boats.length}</p>
    </div>
  )
}

export default AvailableBoats