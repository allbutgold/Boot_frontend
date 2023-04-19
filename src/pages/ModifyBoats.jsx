import { useEffect } from "react";
import { useState } from "react";
import styles from "./ModifyBoats.module.scss"

const ModifyBoats = () => {
  let [boats, setBoats] = useState([])
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
    const newBoats = [...boats]
    newBoats.push(bodyData) 
    setBoats(newBoats)
    
    e.target.reset()
  }
console.log(boats)
  return ( 
    <div className={styles}>
      <h1>The Boats</h1>
      <h2 className="headingForms">Add Boat</h2>
      <form onSubmit={handleSubmit}>
        <div className="labelDiv">
          <label htmlFor="name">name of the boat</label><br/>
          <input type="text" name="name" id="" /><br/><br/>
        </div>
        <div className="labelDiv">
          <label htmlFor="material">material</label><br/>
          <select name="material" id=""><br/>
            <option value="Holz">Holz</option>
            <option value="Metall">Metall</option>
            <option value="GFK">GFK</option>
            <option value="Pappe">Pappe</option>
            <option value="Seelen">Seelen</option>
          </select><br/><br/>
        </div>
        
        <button type="submit">Add Boat</button>

      </form>
      <h2 className="headingBoats">All Boats</h2>
      <div className="boats">
        {
          boats.length>0 && boats.map((boat) =>{
            return (
              <div className="boatDiv">
                <h3>{boat.name}</h3>
                <p>{boat.material}</p>
              </div>
              
            )
          })
        }
      </div>
      
      
    </div>
    
  );
}

export default ModifyBoats;