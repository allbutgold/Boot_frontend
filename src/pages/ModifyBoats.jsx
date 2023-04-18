import { useEffect } from "react";
import { useState } from "react";

const ModifyBoats = () => {
  const [boats, setBoats] = useState([])
  const URL = import.meta.env.VITE_BACKEND 

  useEffect(()=> {
    fetch(URL + "/api/v1/boats")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        
        setBoats(data);
      })
  },[])

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const bodyData = {
      name: form.get('name'),
      material: form.get('material'),
      reservations:[]
    }
    const res = await fetch(URL + "/api/v1/boat", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: { "Content-Type": "application/json" }
    })
    console.log(res);
    const newBoats = boats
    newBoats.push(bodyData)
    setBoats(newBoats)
    e.target.reset()
  }

  return ( 
    <div>
      <h1>The Boats</h1>
      <h2>Add Boat</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" name="name" id="" />
        <label htmlFor="material"></label>
        <select name="material" id="">
          <option value="Holz">Holz</option>
          <option value="Metall">Metall</option>
          <option value="GFK">GFK</option>
          <option value="Pappe">Pappe</option>
          <option value="Seelen">Seelen</option>
        </select>
        <button type="submit">Add Boat</button>

      </form>
      <h2>All Boats</h2>
      {
        boats.length>0 && boats.map((boat) =>{
          return (
            <div>
              <h3>{boat.name}</h3>
              <p>{boat.material}</p>
            </div>
            
          )
        })
      }
      
    </div>
    
  );
}

export default ModifyBoats;