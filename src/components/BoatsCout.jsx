import { useEffect, useState } from "react"

const BoatsCount = () => {
  const [boats, setBoats] = useState([])
const URL = import.meta.env.VITE_BACKEND 

useEffect(() => {
  fetch(URL + "/api/v1/boats")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setBoats(data)
      console.log(data)
    })
}, [])



  return (
    <div>
      <h2>All boats Count</h2>
      <p>{boats.length}</p>
    </div>
  )
}

export default BoatsCount