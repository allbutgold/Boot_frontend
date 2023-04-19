import { useState, useEffect } from "react";

const AddReservation = () => {
  const [boats, setBoats] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const URL = import.meta.env.VITE_BACKEND 

  useEffect(() => {
      fetch(URL + "/api/v1/boats")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setBoats(data);
      })
  }, [])
  
  const handleSubmitBesser = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const startDate = new Date(form.get("startDate")).getTime()
    const endDate = new Date(form.get("endDate")).getTime()
    setStartDate(startDate)
    setEndDate(endDate)
    const res = await 
        fetch(URL + '/api/v1/availiableBoats', {
          method: "POST",
          body: JSON.stringify({ startDate: startDate, endDate: endDate}),
          headers: { "Content-Type": "application/json" }
        })
        .then((res) => res.json())
        .then((data) => { 
          setBoats(data)
          console.log(data)
        })
        e.target.reset()
      }
    
  
  
  const handleSubmit = async (e) => {

    e.preventDefault()
    const form = new FormData(e.target)
    const res = await fetch(URL + "/api/v1/reservation", {
      method: "POST",
      body: JSON.stringify({ boat: boats.filter(boat => {
        return boat._id === form.get("boat")
      }), startDate, endDate }),
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
  <section>
    <h2>add a reservation</h2>
    <form onSubmit={handleSubmitBesser}>
      <label htmlFor="startDate">start Date</label><br/>
      <input type="date" name="startDate"/><br/><br/>
      <label htmlFor="endDate">end Date</label><br/>
      <input type="date" name="endDate"/><br/><br/> 
      <button type="submit">select dates</button>
    </form>

    {startDate && endDate && <form onSubmit={handleSubmit}>
    <select name="boat">
        {boats.map((item, key) => 
        <option value={item._id} key={key}>{item.name}</option>)}
      </select><br/><br/>
      <button type="submit">make reservation</button>
    </form>}

  </section>
)
}

export default AddReservation