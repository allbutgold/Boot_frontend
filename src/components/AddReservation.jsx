import { useState, useEffect } from "react";

const AddReservation = () => {
  const [boats, setBoats] = useState([]);
  
  const URL = import.meta.env.VITE_BACKEND 

  useEffect(() => {
      fetch(URL + "/api/v1/boats")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setBoats(data);
      })
  }, [])

  const handleSubmit = async (e) => {
    console.log('reservation made')
    e.preventDefault()
    const form = new FormData(e.target)
    const startDate = new Date(form.get("startDate")).getTime() / 1000
    const endDate = new Date(form.get("endDate")).getTime() / 1000
    const res = await fetch(URL + "/api/v1/reservation", {
      method: "POST",
      body: JSON.stringify({ boatId: form.get("boat"), startDate, endDate }),
      headers: { "Content-Type": "application/json" }
    })
    const resForBoat = await fetch(URL + "/api/v1/boat", {
      method: "PUT",
      body: JSON.stringify( { boatId: form.get("boat"), reservation:{ startDate : startDate, endDate : endDate }}),
      headers: { "Content-Type": "application/json" }
    })
    e.target.reset()
}
return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boat">select boat</label>
      <select name="boat">
        {boats.map((item, key) => <option value={item._id} key={item._id}>{item.name}</option>)}
      </select>
      <label htmlFor="startDate">start Date</label>
      <input type="date" name="startDate" />
      <label htmlFor="endDate">end Date</label>
      <input type="date" name="endDate" />
      <button type="submit">Add Reservation</button>
    </form>
)
}

export default AddReservation