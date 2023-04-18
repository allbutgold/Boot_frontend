import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard.jsx"
import ModifyReservation from "./pages/ModifyReservation.jsx"
import ModifyBoats from "./pages/ModifyBoats.jsx"
import Navigation from "./components/Navigation.jsx"
import './App.css'

function App() {


  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
        <Route path="/" element={<Dashboard/>} />
          <Route path="/modifyReservation" element={<ModifyReservation/>} />
          <Route path="/modifyBoats" element={<ModifyBoats/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
