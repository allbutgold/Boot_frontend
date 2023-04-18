import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/modifyReservation">Reservation</Link>
      <Link to="/modifyBoats">Boats</Link>
    </nav>
  )
}
export default Navigation